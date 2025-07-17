<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
    <!-- Header avec retour -->
    <div class="relative bg-gradient-to-r from-slate-800 to-slate-900 py-8 border-b border-slate-700">
      <div class="max-w-4xl mx-auto px-4">
        <NuxtLink to="/" class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-6">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Retour à l'accueil
        </NuxtLink>
        <h1 class="text-4xl font-bold text-white mb-2">Politique de Confidentialité</h1>
        <p class="text-gray-300">Protection et respect de vos données personnelles</p>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-4xl mx-auto py-12 px-4">
      <div class="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl p-8 text-white">
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 mb-6">
            Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
          </p>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">1. Collecte des informations</h2>
            <p class="text-gray-200 mb-4">
              Nous collectons les informations que vous nous fournissez directement via notre formulaire de contact :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Nom de votre entreprise</li>
              <li>Secteur d'activité</li>
              <li>Taille de l'entreprise</li>
              <li>Budget approximatif</li>
              <li>Défis actuels</li>
              <li>Fonctionnalités d'intérêt</li>
              <li>Utilisation de solutions logicielles actuelles</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">2. Utilisation des informations</h2>
            <p class="text-gray-200 mb-4">
              Nous utilisons vos informations pour :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li>Vous recontacter dans les 24h concernant votre demande</li>
              <li>Analyser vos besoins et proposer des solutions adaptées</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">3. Partage des informations</h2>
            <p class="text-gray-200 mb-4">
              Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Pour protéger nos droits et notre sécurité</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">4. Sécurité des données</h2>
            <p class="text-gray-200 mb-4">
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li>Chiffrement des données sensibles</li>
              <li>Accès restreint aux informations personnelles</li>
              <li>Surveillance et protection contre les activités malveillantes</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">5. Vos droits</h2>
            <p class="text-gray-200 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li><strong class="text-white">Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
              <li><strong class="text-white">Droit de rectification :</strong> Vous pouvez demander la correction de vos données</li>
              <li><strong class="text-white">Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong class="text-white">Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
              <li><strong class="text-white">Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">6. Conservation des données</h2>
            <p class="text-gray-200 mb-4">
              Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul class="list-disc pl-6 text-gray-200 space-y-2">
              <li>Données de contact : 3 ans maximum après le dernier contact</li>
              <li>Données de prospects : jusqu'à conversion en client ou abandon du projet</li>
              <li>Données clients : pendant la durée contractuelle + 5 ans (obligations légales)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">7. Cookies et technologies similaires</h2>
            <p class="text-gray-200 mb-4">
              Notre site utilise des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p class="text-gray-200 mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
            </p>
            <div class="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
              <p class="text-gray-100 mb-2"><strong class="text-white">Email :</strong> kapsulecompagnie@gmail.com</p>
              <p class="text-gray-100 mb-2"><strong class="text-white">Responsable :</strong> Arnaud Kapongo</p>
              <p class="text-gray-100"><strong class="text-white">Réponse :</strong> Sous 48h ouvrées</p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-white mb-4">9. Modifications</h2>
            <p class="text-gray-200 mb-4">
              Cette politique de confidentialité peut être modifiée pour refléter les changements dans nos pratiques ou la législation. Nous vous informerons de tout changement important.
            </p>
          </section>
        </div>

      </div>
    </div>

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
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Politique de Confidentialité - Kapsule',
  meta: [
    { name: 'description', content: 'Politique de confidentialité de Kapsule. Découvrez comment nous protégeons vos données personnelles et respectons votre vie privée.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>