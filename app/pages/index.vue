<template>
  <div class="min-h-screen overflow-hidden">
    <!-- Hero Section avec formulaire intégré -->
    <section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 overflow-hidden">
      <!-- Particules animées en arrière-plan -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="floating-particles">
          <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle()"></div>
        </div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 z-10">
        <!-- Titre et description -->
        <div class="text-center mb-12 animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {{ displayedText }}
            <span class="animate-ping">|</span>
          </h1>
          <p class="text-xl md:text-2xl mb-4 opacity-90 animate-slide-up">
            Solutions SaaS sur mesure
          </p>
          <p class="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto animate-slide-up">
            Je transforme vos idées en applications web innovantes et évolutives
          </p>
        </div>

        <!-- Formulaire intégré -->
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-2xl md:text-3xl font-bold mb-3">Évaluons vos besoins</h2>
            <p class="text-lg opacity-80">
              5 questions rapides pour une proposition personnalisée
            </p>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl relative overflow-hidden">
            <!-- Accent décoratif Kapsule -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600"></div>
            
            <form @submit.prevent="submitSurvey" class="space-y-6">
            
            <!-- Questions en grid compact -->
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Question 1 -->
              <div>
                <label class="block text-sm font-semibold text-white mb-2">
                  1. Secteur d'activité
                </label>
                <select v-model="survey.sector" required
                        class="w-full p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
                  <option value="" class="text-gray-800">Sélectionnez</option>
                  <option value="ecommerce" class="text-gray-800">E-commerce</option>
                  <option value="finance" class="text-gray-800">Finance/Banque</option>
                  <option value="sante" class="text-gray-800">Santé</option>
                  <option value="education" class="text-gray-800">Éducation</option>
                  <option value="immobilier" class="text-gray-800">Immobilier</option>
                  <option value="industrie" class="text-gray-800">Industrie</option>
                  <option value="services" class="text-gray-800">Services</option>
                  <option value="autre" class="text-gray-800">Autre</option>
                </select>
              </div>

              <!-- Question 5 -->
              <div>
                <label class="block text-sm font-semibold text-white mb-2">
                  2. Quel budget prévoyez‑vous pour les logiciels ? 
                </label>
                <select v-model="survey.budget" required
                        class="w-full p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
                  <option value="" class="text-gray-800">Sélectionnez</option>
                  <option value="moins-10k" class="text-gray-800">< 10k€</option>
                  <option value="10k-25k" class="text-gray-800">10k - 25k€</option>
                  <option value="25k-50k" class="text-gray-800">25k - 50k€</option>
                  <option value="50k-100k" class="text-gray-800">50k - 100k€</option>
                  <option value="plus-100k" class="text-gray-800">> 100k€</option>
                </select>
              </div>
            </div>

            <!-- Question 2 - Taille entreprise (compact) -->
            <div>
              <label class="block text-sm font-semibold text-white mb-2">
                3. Taille de l'entreprise
              </label>
              <div class="flex flex-wrap gap-2">
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.companySize" value="startup" class="mr-2 text-white accent-white" required>
                  <span>Startup (1-10)</span>
                </label>
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.companySize" value="pme" class="mr-2 text-white accent-white">
                  <span>PME (11-50)</span>
                </label>
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.companySize" value="moyenne" class="mr-2 text-white accent-white">
                  <span>Moyenne (51-250)</span>
                </label>
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.companySize" value="grande" class="mr-2 text-white accent-white">
                  <span>Grande (250+)</span>
                </label>
              </div>
            </div>

            <!-- Question 4 - Fonctionnalités (compact) -->
            <div>
              <label class="block text-sm font-semibold text-white mb-2">
                4. Fonctionnalités d'intérêt
              </label>
              <div class="flex flex-wrap gap-2">
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="crm" class="mr-2 text-white accent-white">
                  <span>CRM</span>
                </label>
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="ecommerce" class="mr-2 text-white accent-white">
                  <span>E-commerce</span>
                </label>
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="analytics" class="mr-2 text-white accent-white">
                  <span>Analytics</span>
                </label>
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="workflow" class="mr-2 text-white accent-white">
                  <span>Workflow</span>
                </label>
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="hr" class="mr-2 text-white accent-white">
                  <span>RH</span>
                </label>
                <label class="flex items-center px-3 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="checkbox" v-model="survey.features" value="projet" class="mr-2 text-white accent-white">
                  <span>Projets</span>
                </label>
              </div>
            </div>

            <!-- Question 5 - Utilisation logicielle actuelle -->
            <div>
              <label class="block text-sm font-semibold text-white mb-2">
                5. Utilisez-vous une solution logicielle actuellement ?
              </label>
              <div class="flex gap-4 mb-3">
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.usesSoftware" value="oui" class="mr-2 text-white accent-white" required>
                  <span>Oui</span>
                </label>
                <label class="flex items-center px-4 py-2 border border-white/30 rounded-full cursor-pointer hover:bg-white/20 text-sm transition-colors text-white">
                  <input type="radio" v-model="survey.usesSoftware" value="non" class="mr-2 text-white accent-white">
                  <span>Non</span>
                </label>
              </div>
              
              <!-- Champ conditionnel pour le nom du logiciel -->
              <div v-if="survey.usesSoftware === 'oui'" class="mt-3">
                <input v-model="survey.softwareName" 
                       placeholder="Nom du logiciel utilisé"
                       class="w-full p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
              </div>
            </div>

            <!-- Question 6 - Défi principal (réduit) -->
            <div>
              <label class="block text-sm font-semibold text-white mb-2">
                6. Principal défi actuel
              </label>
              <textarea v-model="survey.challenge" required
                        rows="2" placeholder="Décrivez brièvement votre défi..."
                        class="w-full p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent resize-none bg-white/20 text-white placeholder-white/70">
              </textarea>
            </div>

            <!-- Piège à honeypot (invisible pour les humains) -->
            <div style="position: absolute; left: -9999px; opacity: 0; height: 0; overflow: hidden;">
              <input v-model="honeypot" 
                     type="text" 
                     name="website" 
                     placeholder="Laissez ce champ vide"
                     tabindex="-1"
                     autocomplete="off">
            </div>

            <!-- Informations contact (compact) -->
            <div class="border-t border-white/30 pt-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input v-model="survey.name" required
                       placeholder="Nom complet"
                       class="p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
                <input v-model="survey.email" type="email" required
                       placeholder="Email"
                       class="p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
                <input v-model="survey.company" required
                       placeholder="Entreprise"
                       class="p-3 text-sm border border-white/30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent bg-white/20 text-white placeholder-white/70">
              </div>
            </div>

            <!-- Bouton d'envoi (compact) -->
            <div class="text-center">
              <button type="submit" 
                      :disabled="isSubmitting || !isFormValid"
                      class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group">
                <!-- Effet de brillance au survol -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span v-if="!isSubmitting">
                  {{ isFormValid ? 'Envoyer ma demande 🚀' : 'Complétez le formulaire 📝' }}
                </span>
                <span v-else class="relative z-10">
                  Envoi en cours... ⏳
                </span>
              </button>
              
              <!-- Indicateur de progression (mini) -->
              <div v-if="!isFormValid" class="flex items-center justify-center space-x-1 mt-3">
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.sector ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.budget ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.companySize ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.features.length > 0 ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.usesSoftware ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.challenge.trim() ? 'bg-green-400' : 'bg-white/30'"></div>
                <div class="w-1.5 h-1.5 rounded-full" :class="survey.name.trim() && survey.email.trim() && survey.company.trim() ? 'bg-green-400' : 'bg-white/30'"></div>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </section>


    <!-- Section Contact/CTA -->
    <section id="contact" class="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <!-- Particules de fond -->
      <div class="absolute inset-0">
        <div class="contact-particles">
          <div class="contact-particle" v-for="i in 15" :key="i" :style="getContactParticleStyle()"></div>
        </div>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4 text-center z-10">
        <div class="animate-fade-in">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">
            Prêt à transformer <br>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
              votre vision en réalité ?
            </span>
          </h2>
          <p class="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Collaborons ensemble pour créer la solution SaaS qui propulsera votre entreprise vers le succès
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button class="group bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span class="mr-3">Démarrer un projet</span>
              <span class="group-hover:translate-x-2 transition-transform duration-300">🚀</span>
            </button>
            <button class="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <span class="mr-3">Planifier un appel</span>
              <span>📞</span>
            </button>
          </div>
          
          <!-- Contact Info -->
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="contact-info-item">
              <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-2xl">📧</span>
              </div>
              <h4 class="font-semibold mb-2">Email</h4>
              <p class="text-gray-300">kapsulecompagnie@gmail.com</p>
            </div>
            <div class="contact-info-item">
              <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-2xl">💬</span>
              </div>
              <h4 class="font-semibold mb-2">Discussion</h4>
              <p class="text-gray-300">Réponse sous 24h</p>
            </div>
            <div class="contact-info-item">
              <div class="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span class="text-2xl">⚡</span>
              </div>
              <h4 class="font-semibold mb-2">Fiabilité</h4>
              <p class="text-gray-300">Livraison agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Informations entreprise -->
          <div>
            <h3 class="text-xl font-bold mb-4">Kapsule</h3>
            <p class="text-gray-300 mb-4">
              Développement de solutions SaaS sur mesure pour propulser votre entreprise vers le succès.
            </p>
            <p class="text-gray-400 text-sm">
              © 2024 Kapsule. Tous droits réservés.
            </p>
          </div>
          
          <!-- Liens utiles -->
          <div>
            <h4 class="font-semibold mb-4">Liens utiles</h4>
            <ul class="space-y-2 text-gray-300">
              <li><NuxtLink to="/about" class="hover:text-white transition-colors">À propos</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Politique de confidentialité</NuxtLink></li>
              <li><a href="mailto:kapsulecompagnie@gmail.com" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <!-- Contact -->
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <div class="space-y-2 text-gray-300">
              <p>📧 kapsulecompagnie@gmail.com</p>
              <p>⚡ Réponse sous 24h</p>
              <p>🚀 Livraison agile</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <!-- Popup de succès -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100 animate-fade-in shadow-2xl">
        <!-- Icône de succès -->
        <div class="text-center mb-6">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Message envoyé !</h3>
          <p class="text-gray-600 mb-6">
            Merci pour votre intérêt ! J'ai bien reçu votre formulaire et je vous recontacterai sous 24h pour discuter de votre projet.
          </p>
        </div>

        <!-- Informations supplémentaires -->
        <div class="bg-blue-50 rounded-lg p-4 mb-6">
          <div class="flex items-center mb-2">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span class="text-sm font-semibold text-blue-800">Prochaines étapes :</span>
          </div>
          <ul class="text-sm text-blue-700 space-y-1">
            <li>• Analyse de vos besoins</li>
            <li>• Proposition personnalisée</li>
            <li>• Appel de découverte</li>
          </ul>
        </div>

        <!-- Boutons d'action -->
        <div class="flex space-x-3">
          <button 
            @click="closeSuccessModal"
            class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Parfait !
          </button>
          <button 
            @click="closeSuccessModal"
            class="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
            Fermer
          </button>
        </div>

        <!-- Confetti animation -->
        <div class="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <div class="confetti-piece" v-for="i in 20" :key="i" 
               :style="getConfettiStyle(i)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Développer des solutions SaaS - Arnaud Kapongo',
  meta: [
    { name: 'description', content: 'Spécialiste en développement de solutions SaaS sur mesure. React, Vue.js, Node.js, Python. Transformez vos idées en applications web innovantes.' }
  ]
})

const { } = useInitialLoading()

// Animation typing effect
const fullText = "Développer des solutions SaaS"
const displayedText = ref("")
const typingSpeed = 150

onMounted(() => {
  let i = 0
  const typeWriter = () => {
    if (i < fullText.length) {
      displayedText.value += fullText.charAt(i)
      i++
      setTimeout(typeWriter, typingSpeed)
    }
  }
  setTimeout(typeWriter, 500)
})

// Scroll to section
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  })
}

// Particules flottantes
const getParticleStyle = () => {
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${20 + Math.random() * 20}s`
  }
}


// Données du formulaire
const survey = ref({
  sector: '',
  companySize: '',
  challenge: '',
  features: [],
  budget: '',
  name: '',
  email: '',
  company: '',
  usesSoftware: '',
  softwareName: ''
})

const isSubmitting = ref(false)
const formStartTime = ref(0)
const showSuccessModal = ref(false)

// Piège à honeypot invisible pour les bots
const honeypot = ref('')

// Validation du formulaire en temps réel
const isFormValid = computed(() => {
  return survey.value.sector !== '' &&
         survey.value.companySize !== '' &&
         survey.value.challenge.trim() !== '' &&
         survey.value.features.length > 0 &&
         survey.value.budget !== '' &&
         survey.value.name.trim() !== '' &&
         survey.value.email.trim() !== '' &&
         survey.value.company.trim() !== '' &&
         survey.value.usesSoftware !== ''
})

// Démarrer le timer quand le composant est monté
onMounted(() => {
  formStartTime.value = Date.now()
})

// Fonction pour générer le message de progression
const getCompletionMessage = () => {
  const completed = [
    survey.value.sector,
    survey.value.companySize,
    survey.value.challenge.trim(),
    survey.value.features.length > 0,
    survey.value.budget,
    survey.value.name.trim() && survey.value.email.trim() && survey.value.company.trim()
  ].filter(Boolean).length
  
  const total = 6
  const remaining = total - completed
  
  if (remaining === 0) return "Formulaire complet ! 🎉"
  if (remaining === 1) return `Plus qu'une question à compléter`
  return `${remaining} questions restantes à compléter`
}

// Fonction pour envoyer le formulaire
const submitSurvey = async () => {
  isSubmitting.value = true
  
  try {
    // Protection anti-bot : vérifier le honeypot
    if (honeypot.value !== '') {
      console.log('🤖 Bot détecté via honeypot')
      return
    }
    
    // Protection anti-bot : vérifier le temps de remplissage
    const fillTime = Date.now() - formStartTime.value
    if (fillTime < 30000) { // Moins de 30 secondes = suspect
      alert('Veuillez prendre le temps de remplir le formulaire correctement.')
      return
    }
    
    // Formatage des données pour l'envoi direct
    const surveyData = {
      // Données du formulaire
      sector: survey.value.sector,
      companySize: survey.value.companySize,
      challenge: survey.value.challenge,
      features: survey.value.features,
      budget: survey.value.budget,
      name: survey.value.name,
      email: survey.value.email,
      company: survey.value.company,
      usesSoftware: survey.value.usesSoftware,
      softwareName: survey.value.softwareName,
      // Données de sécurité
      fillTime: fillTime,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    }
    
    // Envoi du formulaire via l'API
    await $fetch('/api/send-survey', { 
      method: 'POST', 
      body: surveyData 
    })
    
    // Réinitialiser le formulaire
    survey.value = {
      sector: '',
      companySize: '',
      challenge: '',
      features: [],
      budget: '',
      name: '',
      email: '',
      company: '',
      usesSoftware: '',
      softwareName: ''
    }
    honeypot.value = ''
    formStartTime.value = Date.now()
    
    // Afficher la popup de succès
    showSuccessModal.value = true
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('Une erreur s\'est produite. Veuillez réessayer ou me contacter directement.')
  } finally {
    isSubmitting.value = false
  }
}


// Particules pour la section contact
const getContactParticleStyle = () => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${10 + Math.random() * 10}s`
  }
}

// Fonction pour fermer la popup et faire défiler vers le haut
const closeSuccessModal = () => {
  showSuccessModal.value = false
  // Scroll vers le haut pour voir le formulaire vide
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Fonction pour générer les styles des confettis
const getConfettiStyle = (index: number) => {
  const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4']
  return {
    position: 'absolute' as const,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: '8px',
    height: '8px',
    backgroundColor: colors[index % colors.length],
    borderRadius: '50%',
    animation: `confetti-fall 3s ease-out ${index * 0.1}s`,
    opacity: '0.8'
  }
}

</script>