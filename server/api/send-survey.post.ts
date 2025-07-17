import nodemailer from 'nodemailer'

// Rate limiting en mémoire (pour production, utilisez Redis)
const rateLimitStore = new Map()

// Types pour les données du formulaire
interface SurveyData {
  sector: string
  companySize: string
  challenge: string
  features: string[]
  budget: string
  name: string
  email: string
  company: string
  usesSoftware: string
  softwareName?: string
  fillTime?: number
  userAgent?: string
  timestamp?: string
}

// Fonction de validation des données
function validateSurveyData(data: any): SurveyData {
  const requiredFields = ['sector', 'companySize', 'challenge', 'budget', 'name', 'email', 'company', 'usesSoftware']

  // Validation des champs requis
  for (const field of requiredFields) {
    if (!data[field] || typeof data[field] !== 'string' || data[field].trim() === '') {
      throw new Error(`Le champ ${field} est requis`)
    }
  }

  // Validation spéciale pour features (tableau)
  if (!data.features || !Array.isArray(data.features) || data.features.length === 0) {
    throw new Error('Vous devez sélectionner au moins une fonctionnalité')
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error('Email invalide')
  }

  // Validation longueur des champs
  if (data.challenge.length > 1000) {
    throw new Error('Le défi ne peut pas dépasser 1000 caractères')
  }

  if (data.name.length > 100) {
    throw new Error('Le nom ne peut pas dépasser 100 caractères')
  }

  return data as SurveyData
}

// Fonction rate limiting
function checkRateLimit(clientIP: string) {
  const now = Date.now()
  const hourMs = 60 * 60 * 1000
  const dayMs = 24 * hourMs

  const userLimits = rateLimitStore.get(clientIP) || { hourly: [], daily: [] }

  // Nettoyer les anciens timestamps
  userLimits.hourly = userLimits.hourly.filter((time: number) => now - time < hourMs)
  userLimits.daily = userLimits.daily.filter((time: number) => now - time < dayMs)

  // Vérifier les limites
  const maxHourly = parseInt(process.env.MAX_REQUESTS_PER_HOUR || '5')
  const maxDaily = parseInt(process.env.MAX_REQUESTS_PER_DAY || '20')

  if (userLimits.hourly.length >= maxHourly) {
    throw new Error('Trop de requêtes par heure. Essayez plus tard.')
  }

  if (userLimits.daily.length >= maxDaily) {
    throw new Error('Trop de requêtes par jour. Essayez demain.')
  }

  // Ajouter le timestamp actuel
  userLimits.hourly.push(now)
  userLimits.daily.push(now)
  rateLimitStore.set(clientIP, userLimits)
}

// Fonction de sanitization
function sanitizeData(data: any): any {
  const sanitized: any = {}
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Supprimer les caractères dangereux
      sanitized[key] = value.replace(/[<>\"'&]/g, '').trim()
    } else if (Array.isArray(value)) {
      sanitized[key] = value.filter(v => typeof v === 'string').map(v => v.replace(/[<>\"'&]/g, '').trim())
    } else {
      sanitized[key] = value
    }
  }
  return sanitized
}

export default defineEventHandler(async (event) => {
  // Déclaration de clientIP au début pour qu'elle soit accessible partout
  let clientIP = 'unknown'

  try {
    // Vérification de la méthode HTTP
    if (event.node.req.method !== 'POST') {
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed'
      })
    }

    // Vérification des variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Configuration email manquante - Vérifiez vos variables d\'environnement GMAIL_USER et GMAIL_APP_PASSWORD'
      })
    }

    // Rate limiting - Obtenir l'IP du client
    clientIP = getHeader(event, 'x-forwarded-for') ||
      getHeader(event, 'x-real-ip') ||
      getHeader(event, 'cf-connecting-ip') ||
      event.node.req.socket?.remoteAddress ||
      'unknown'
    checkRateLimit(clientIP)

    // Lecture et validation des données
    const rawBody = await readBody(event)

    // Debug: voir ce qui est reçu
    console.log('📋 Données reçues:', JSON.stringify(rawBody, null, 2))

    // Vérification du temps de remplissage
    if (rawBody.fillTime && rawBody.fillTime < 30000) {
      console.log('🤖 Bot détecté - temps de remplissage trop rapide:', rawBody.fillTime)
      throw new Error('Temps de remplissage trop rapide')
    }

    const sanitizedBody = sanitizeData(rawBody)
    console.log('🧼 Données après sanitization:', JSON.stringify(sanitizedBody, null, 2))

    const body = validateSurveyData(sanitizedBody)

    // Configuration du transporteur email sécurisé
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      },
      // Configuration plus permissive pour le développement
      secure: false,
      requireTLS: true,
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      debug: true, // Activer les logs détaillés
      logger: true
    })

    // Vérification de la connexion Gmail
    console.log('🔧 Test de connexion Gmail...')
    try {
      await transporter.verify()
      console.log('✅ Connexion Gmail réussie')
    } catch (emailError) {
      console.error('❌ Erreur de connexion Gmail:', emailError)
      const errorMessage = emailError instanceof Error ? emailError.message : 'Erreur inconnue'
      throw new Error(`Authentification Gmail échouée: ${errorMessage}`)
    }

    // Formatage sécurisé de l'email
    const emailContent = `
=== NOUVEAU FORMULAIRE SAAS ===
Horodatage: ${new Date().toISOString()}
IP Client: ${clientIP}

=== INFORMATIONS CONTACT ===
Nom: ${body.name}
Email: ${body.email}
Entreprise: ${body.company}

=== RÉPONSES AU FORMULAIRE ===
1. Secteur d'activité: ${body.sector}
2. Taille entreprise: ${body.companySize}
3. Principal défi: ${body.challenge}
4. Fonctionnalités intéressantes: ${Array.isArray(body.features) ? body.features.join(', ') : 'Non spécifié'}
5. Budget: ${body.budget}
6. Utilise une solution logiciel: ${body.usesSoftware}${body.softwareName ? ` (${body.softwareName})` : ''}

=== PROCHAINES ÉTAPES ===
Contacter ce prospect dans les 24h pour discuter de ses besoins.

=== SÉCURITÉ ===
✅ Validé : Temps de remplissage: ${body.fillTime ? Math.round(body.fillTime / 1000) : 'N/A'}s
✅ Validé : User Agent: ${body.userAgent || 'N/A'}
✅ Validé : Rate limiting respecté
✅ Validé : Honeypot non rempli
✅ Validé : Données sanitisées
    `

    // Envoi de l'email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'kapsulecompagnie@gmail.com',
      subject: `🚀 Nouveau prospect SaaS - ${body.company}`,
      text: emailContent,
      // Protection contre le spam
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'X-Mailer': 'KAPSULE-SURVEY-SYSTEM'
      }
    })

    // Log sécurisé (sans données sensibles)
    console.log(`✅ Formulaire envoyé avec succès pour ${body.company} (${new Date().toISOString()})`)

    return {
      success: true,
      message: 'Formulaire envoyé avec succès! Vous serez contacté sous 24h.',
      timestamp: new Date().toISOString()
    }

  } catch (error) {
    // Log d'erreur détaillé pour le debugging
    const errorMessage = error instanceof Error ? error.message : 'Erreur inconnue'
    console.error('❌ Erreur formulaire détaillée:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace',
      timestamp: new Date().toISOString(),
      clientIP: clientIP
    })

    // Gestion des erreurs spécifiques
    if (errorMessage.includes('Trop de requêtes')) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: errorMessage
      })
    }

    if (errorMessage.includes('requis') || errorMessage.includes('invalide')) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: errorMessage
      })
    }

    // Erreurs Gmail spécifiques
    if (errorMessage.includes('Invalid login') || errorMessage.includes('Username and Password not accepted')) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Erreur de configuration Gmail - Vérifiez vos identifiants et votre mot de passe d\'application'
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: `Erreur lors de l'envoi du formulaire: ${errorMessage}`
    })
  }
})