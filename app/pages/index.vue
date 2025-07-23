<template>
  <div class="min-h-screen bg-gray-900 overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s"></div>
      
      <!-- Floating Particles -->
      <div class="floating-particles">
        <div class="particle" v-for="i in 50" :key="i" :style="getParticleStyle()"></div>
      </div>
      
      <!-- Grid Pattern -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
    </div>

    <!-- Hero Section avec formulaire intégré -->
    <section class="relative py-20 overflow-hidden z-10">
      <div class="relative max-w-7xl mx-auto px-4 z-20">
        <!-- Titre et description -->
        <div class="text-center mb-16 animate-fade-in">
          <!-- Badge Expert -->
          <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg">
            <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
            <span class="text-sm font-medium">Expert en développement SaaS</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            {{ displayedText }}
            <span class="text-blue-400 animate-ping">|</span>
          </h1>
          <p class="text-xl md:text-2xl mb-6 text-gray-300 animate-slide-up">
            Solutions SaaS sur mesure pour entreprises innovantes
          </p>
          <p class="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto animate-slide-up leading-relaxed">
            Transformez vos idées en applications web performantes et évolutives avec un expert en développement SaaS
          </p>
        </div>
        <!-- Formulaire intégré -->
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-200">Évaluons vos besoins</h2>
            <p class="text-xl text-gray-300 font-medium">
              5 questions rapides pour une proposition personnalisée
            </p>
          </div>

        <div class="bg-white/95 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 shadow-2xl relative overflow-hidden">
          <!-- Decorative accent -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
            
          <form @submit.prevent="submitSurvey" class="space-y-8 relative z-10">
            <!-- Questions en grid compact -->
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Question 1 -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">
                  1. Secteur d'activité
                </label>
                <select v-model="survey.sector" required
                        class="w-full p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
                  <option value="">Sélectionnez</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="finance">Finance/Banque</option>
                  <option value="sante">Santé</option>
                  <option value="education">Éducation</option>
                  <option value="immobilier">Immobilier</option>
                  <option value="industrie">Industrie</option>
                  <option value="services">Services</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <!-- Question 2 -->
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-3">
                  2. Quel budget prévoyez‑vous pour les logiciels ? 
                </label>
                <select v-model="survey.budget" required
                        class="w-full p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
                  <option value="">Sélectionnez</option>
                  <option value="20-50">20–50 €/mois</option>
                  <option value="50-150">50–150 €/mois</option>
                  <option value="150-500">150–500 €/mois</option>
                  <option value="500-plus">500€ voir plus</option>
                </select>
              </div>
            </div>

            <!-- Question 3 - Taille entreprise -->
            <div class="col-span-full">
              <label class="block text-sm font-semibold text-gray-900 mb-4">
                3. Taille de l'entreprise
              </label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label class="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.companySize" value="startup" class="mr-2 text-blue-600" required>
                  <span class="text-gray-900 font-medium">Startup (1-10)</span>
                </label>
                <label class="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.companySize" value="pme" class="mr-2 text-blue-600">
                  <span class="text-gray-900 font-medium">PME (11-50)</span>
                </label>
                <label class="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.companySize" value="moyenne" class="mr-2 text-blue-600">
                  <span class="text-gray-900 font-medium">Moyenne (51-250)</span>
                </label>
                <label class="flex items-center justify-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.companySize" value="grande" class="mr-2 text-blue-600">
                  <span class="text-gray-900 font-medium">Grande (250+)</span>
                </label>
              </div>
            </div>

            <!-- Question 4 - Fonctionnalités -->
            <div class="col-span-full">
              <label class="block text-sm font-semibold text-gray-900 mb-4">
                4. Vos besoins fonctionnels
              </label>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="crm" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">CRM</span>
                </label>
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="ecommerce" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">E-commerce</span>
                </label>
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="analytics" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">Analytics</span>
                </label>
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="workflow" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">Workflow</span>
                </label>
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="hr" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">RH</span>
                </label>
                <label class="flex items-center px-4 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 text-sm transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="checkbox" v-model="survey.features" value="projet" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">Projets</span>
                </label>
              </div>
            </div>

            <!-- Question 5 - Utilisation logicielle actuelle -->
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-900 mb-4">
                5. Utilisez-vous une solution logicielle actuellement ?
              </label>
              <div class="flex gap-4 mb-4">
                <label class="flex items-center px-6 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.usesSoftware" value="oui" class="mr-3 text-blue-600" required>
                  <span class="text-gray-900 font-medium">Oui</span>
                </label>
                <label class="flex items-center px-6 py-3 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 shadow-sm">
                  <input type="radio" v-model="survey.usesSoftware" value="non" class="mr-3 text-blue-600">
                  <span class="text-gray-900 font-medium">Non</span>
                </label>
              </div>
              
              <!-- Champ conditionnel pour le nom du logiciel -->
              <div v-if="survey.usesSoftware === 'oui'">
                <input v-model="survey.softwareName" 
                       placeholder="Nom du logiciel utilisé"
                       class="w-full p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
              </div>
            </div>

            <!-- Question 6 - Défi principal -->
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-900 mb-3">
                6. Principal défi actuel
              </label>
              <textarea v-model="survey.challenge" required
                        rows="4" placeholder="Décrivez brièvement votre défi principal..."
                        class="w-full p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none bg-white text-gray-900 shadow-sm">
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

            <!-- Informations contact -->
            <div class="col-span-full border-t border-gray-300 pt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-6">Informations de contact</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input v-model="survey.name" required
                       placeholder="Nom complet"
                       class="p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
                <input v-model="survey.email" type="email" required
                       placeholder="Email professionnel"
                       class="p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
                <input v-model="survey.company" required
                       placeholder="Nom de l'entreprise"
                       class="p-4 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 shadow-sm">
              </div>
            </div>

            <!-- Bouton d'envoi -->
            <div class="col-span-full text-center">
              <button type="submit" 
                      :disabled="isSubmitting || !isFormValid"
                      class="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group">
                <!-- Shine effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span v-if="!isSubmitting" class="relative z-10">
                  {{ isFormValid ? 'Envoyer ma demande 🚀' : 'Complétez le formulaire 📝' }}
                </span>
                <span v-else class="relative z-10">
                  Envoi en cours... ⏳
                </span>
              </button>
              
              <!-- Indicateur de progression -->
              <div v-if="!isFormValid" class="flex items-center justify-center space-x-2 mt-6">
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.sector ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.budget ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.companySize ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.features.length > 0 ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.usesSoftware ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.challenge.trim() ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
                <div class="w-2.5 h-2.5 rounded-full transition-all duration-300" :class="survey.name.trim() && survey.email.trim() && survey.company.trim() ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-gray-300'"></div>
              </div>
              <p v-if="!isFormValid" class="text-sm text-gray-700 mt-3 font-medium">Progression: {{ Math.round((completedFields / 7) * 100) }}%</p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>

    <!-- Section Contact/CTA -->
    <section id="contact" class="py-20 bg-gray-800 text-white relative overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
        <div class="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 3s"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 text-center z-20">
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
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button class="group bg-gradient-to-r from-white to-gray-100 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:from-gray-100 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span class="mr-3 relative z-10">Démarrer un projet</span>
              <span class="group-hover:translate-x-2 transition-transform duration-300 relative z-10">🚀</span>
            </button>
            <button class="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span class="mr-3">Planifier un appel</span>
              <span>📞</span>
            </button>
          </div>
          
          <!-- Contact Info -->
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div class="contact-info-item group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span class="text-3xl">📧</span>
              </div>
              <h4 class="font-bold mb-3 text-white">Email</h4>
              <p class="text-gray-300">kapsulecompagnie@gmail.com</p>
            </div>
            <div class="contact-info-item group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span class="text-3xl">💬</span>
              </div>
              <h4 class="font-bold mb-3 text-white">Discussion</h4>
              <p class="text-gray-300">Réponse sous 24h</p>
            </div>
            <div class="contact-info-item group">
              <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span class="text-3xl">⚡</span>
              </div>
              <h4 class="font-bold mb-3 text-white">Fiabilité</h4>
              <p class="text-gray-300">Livraison agile</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />

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
  title: 'Développement SaaS Sur Mesure | Kapsule - Solutions Innovantes',
  meta: [
    { name: 'description', content: 'Expert en développement de solutions SaaS sur mesure. React, Vue.js, Node.js, Python. Transformez vos idées en applications web performantes et évolutives. Devis gratuit sous 24h.' },
    { name: 'keywords', content: 'développement SaaS, solutions sur mesure, React, Vue.js, Node.js, Python, applications web, développeur freelance, transformation digitale' },
    { name: 'author', content: 'Arnaud Kapongo' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Développement SaaS Sur Mesure | Kapsule - Solutions Innovantes' },
    { property: 'og:description', content: 'Expert en développement de solutions SaaS sur mesure. Transformez vos idées en applications web performantes. Devis gratuit sous 24h.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kapsule.fr' },
    { property: 'og:image', content: 'https://kapsule.fr/kapsule-og.jpg' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Développement SaaS Sur Mesure | Kapsule' },
    { name: 'twitter:description', content: 'Expert en développement de solutions SaaS sur mesure. Devis gratuit sous 24h.' },
    { name: 'twitter:image', content: 'https://kapsule.fr/kapsule-og.jpg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kapsule.fr' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Kapsule",
        "description": "Expert en développement de solutions SaaS sur mesure",
        "url": "https://kapsule.fr",
        "telephone": "+33-XXX-XXX-XXX",
        "email": "kapsulecompagnie@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "FR",
          "addressLocality": "France"
        },
        "founder": {
          "@type": "Person",
          "name": "Arnaud Kapongo",
          "jobTitle": "Développeur SaaS",
          "url": "https://kapsule.fr/about"
        },
        "serviceType": "Développement SaaS",
        "areaServed": "France",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de développement",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Développement SaaS sur mesure"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Applications web React/Vue.js"
              }
            }
          ]
        }
      })
    }
  ]
})


// Animation typing effect
const fullText = "Développer des solutions SaaS"
const displayedText = ref("")
const typingSpeed = 150

// Particules flottantes
const getParticleStyle = () => {
  return {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 20}s`,
    animationDuration: `${20 + Math.random() * 20}s`
  }
}

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

// Compteur des champs complétés
const completedFields = computed(() => {
  let count = 0
  if (survey.value.sector) count++
  if (survey.value.budget) count++
  if (survey.value.companySize) count++
  if (survey.value.features.length > 0) count++
  if (survey.value.usesSoftware) count++
  if (survey.value.challenge.trim()) count++
  if (survey.value.name.trim() && survey.value.email.trim() && survey.value.company.trim()) count++
  return count
})

// Démarrer le timer quand le composant est monté
onMounted(() => {
  formStartTime.value = Date.now()
})


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

.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slideUp 1s ease-out 0.3s forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glassmorphism effects */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Custom hover animations */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-2 {
  transform: translateX(0.5rem);
}

/* Progress indicator glow */
.shadow-blue-400\/50 {
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

/* Button shine effect */
.group:hover .group-hover\:translate-x-full {
  transform: translateX(100%);
}
</style>