<template>
  <div class="min-h-screen bg-gray-900 overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
      
      <!-- Floating Particles -->
      <div class="floating-particles">
        <div class="particle" v-for="i in 30" :key="i" :style="getParticleStyle()"></div>
      </div>
    </div>

    <!-- Header avec retour -->
    <div class="relative py-12 z-10">
      <div class="max-w-4xl mx-auto px-4">
        <NuxtLink to="/" class="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl mb-8 group">
          <svg class="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Retour à l'accueil
        </NuxtLink>
        
        <div class="text-center">
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg">
            <span class="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
            <span class="text-sm font-medium">Protection des données</span>
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Politique de Confidentialité</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">Protection et respect de vos données personnelles selon le RGPD</p>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="relative max-w-4xl mx-auto pb-12 px-4 z-10">
      <div class="bg-white/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 text-gray-900 relative overflow-hidden">
        <!-- Decorative accent -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-8 text-center font-medium">
            Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}
          </p>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">1</span>
              Collecte des informations
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nous collectons les informations que vous nous fournissez directement via notre formulaire de contact :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
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

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">2</span>
              Utilisation des informations
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nous utilisons vos informations pour :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li>Vous recontacter dans les 24h concernant votre demande</li>
              <li>Analyser vos besoins et proposer des solutions adaptées</li>
              <li>Améliorer nos services</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">3</span>
              Partage des informations
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li>Avec votre consentement explicite</li>
              <li>Pour respecter une obligation légale</li>
              <li>Pour protéger nos droits et notre sécurité</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">4</span>
              Sécurité des données
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li>Chiffrement des données sensibles</li>
              <li>Accès restreint aux informations personnelles</li>
              <li>Surveillance et protection contre les activités malveillantes</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">5</span>
              Vos droits
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li><strong class="text-gray-900">Droit d'accès :</strong> Vous pouvez demander l'accès à vos données personnelles</li>
              <li><strong class="text-gray-900">Droit de rectification :</strong> Vous pouvez demander la correction de vos données</li>
              <li><strong class="text-gray-900">Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
              <li><strong class="text-gray-900">Droit à la portabilité :</strong> Vous pouvez demander le transfert de vos données</li>
              <li><strong class="text-gray-900">Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">6</span>
              Conservation des données
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Nous conservons vos données personnelles pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
            </p>
            <ul class="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li>Données de contact : 3 ans maximum après le dernier contact</li>
              <li>Données de prospects : jusqu'à conversion en client ou abandon du projet</li>
              <li>Données clients : pendant la durée contractuelle + 5 ans (obligations légales)</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">7</span>
              Cookies et technologies similaires
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Notre site utilise des cookies techniques nécessaires au fonctionnement du site. Aucun cookie de tracking ou publicitaire n'est utilisé sans votre consentement.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">8</span>
              Contact
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
            </p>
            <div class="bg-teal-50 p-6 rounded-xl border border-teal-200">
              <p class="text-gray-800 mb-2"><strong class="text-gray-900">Email :</strong> kapsulecompagnie@gmail.com</p>
              <p class="text-gray-800 mb-2"><strong class="text-gray-900">Responsable :</strong> Arnaud Kapongo</p>
              <p class="text-gray-800"><strong class="text-gray-900">Réponse :</strong> Sous 48h ouvrées</p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">9</span>
              Modifications
            </h2>
            <p class="text-gray-700 mb-4 leading-relaxed">
              Cette politique de confidentialité peut être modifiée pour refléter les changements dans nos pratiques ou la législation. Nous vous informerons de tout changement important.
            </p>
          </section>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Politique de Confidentialité | Kapsule - Protection des Données',
  meta: [
    { name: 'description', content: 'Politique de confidentialité de Kapsule. Découvrez comment nous protégeons vos données personnelles selon le RGPD et respectons votre vie privée.' },
    { name: 'keywords', content: 'politique confidentialité, protection données, RGPD, vie privée, sécurité, Kapsule' },
    { name: 'author', content: 'Arnaud Kapongo' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Politique de Confidentialité | Kapsule' },
    { property: 'og:description', content: 'Découvrez comment Kapsule protège vos données personnelles selon le RGPD.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kapsule.fr/privacy' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Politique de Confidentialité | Kapsule' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kapsule.fr/privacy' }
  ]
})
// Particules flottantes
const getParticleStyle = () => {
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${20 + Math.random() * 20}s`
  }
}
</script>

<style scoped>
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4);
  border-radius: 50%;
  animation: float linear infinite;
  box-shadow: 0 0 6px rgba(59, 130, 246, 0.8);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) translateX(100px) rotate(360deg);
    opacity: 0;
  }
}

.particle:nth-child(odd) {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  box-shadow: 0 0 6px rgba(139, 92, 246, 0.8);
}

.particle:nth-child(3n) {
  background: linear-gradient(45deg, #06b6d4, #3b82f6);
  box-shadow: 0 0 6px rgba(6, 182, 212, 0.8);
}
</style>