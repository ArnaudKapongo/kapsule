<template>
  <div class="min-h-screen bg-gray-50">
    <!-- About Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Photo -->
            <div class="text-center">
              <img src="/moi.jpeg" alt="Photo de profil" class="w-80 h-80 rounded-full mx-auto shadow-xl object-cover grayscale">
              
              <!-- Contact Links -->
              <div class="mt-8 space-y-4">
                <div class="flex items-center justify-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <a href="https://fr.linkedin.com/in/arnaud-kapongo-23241b161" target="_blank" 
                     class="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                    LinkedIn
                  </a>
                </div>
                
                <div class="flex items-center justify-center gap-3">
                  <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.273L12 10.845l10.091-7.024h.273c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <a href="mailto:kapsulecompagnie@gmail.com" 
                     class="text-red-600 hover:text-red-800 transition-colors font-medium">
                    Email
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Parcours -->
            <div class="space-y-6">
              <div class="bg-white rounded-lg shadow-lg p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Mon Parcours & Vision</h3>
                
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <img src="/kapsuleOnly.svg" alt="Kapsule icon" class="w-12 h-12 text-blue-600" style="filter: invert(26%) sepia(100%) saturate(2500%) hue-rotate(210deg) brightness(95%) contrast(100%);">
                    <div>
                      <h4 class="text-lg font-semibold text-gray-900">+10 ans d'Expérience</h4>
                      <p class="text-gray-600">Plus d'une décennie de développement avec une expertise approfondie du mobile au web</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <img src="/kapsuleOnly.svg" alt="Kapsule icon" class="w-12 h-12 text-purple-600" style="filter: invert(26%) sepia(100%) saturate(2500%) hue-rotate(270deg) brightness(95%) contrast(100%);">
                    <div>
                      <h4 class="text-lg font-semibold text-gray-900">Secteurs d'Excellence</h4>
                      <div class="flex flex-wrap gap-2 mt-2 mb-2">
                        <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">Ministère de la Justice</span>
                        <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">GIE Sesam-Vitale</span>
                        <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Desoutter</span>
                      </div>
                      <p class="text-gray-600">Applications critiques, sécurité, IoT industriel et solutions gouvernementales</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <img src="/kapsuleOnly.svg" alt="Kapsule icon" class="w-12 h-12 text-green-600" style="filter: invert(26%) sepia(100%) saturate(2500%) hue-rotate(120deg) brightness(95%) contrast(100%);">
                    <div>
                      <h4 class="text-lg font-semibold text-gray-900">Expertise Solide</h4>
                      <p class="text-gray-600">Applications critiques, sécurité, IoT industriel et solutions gouvernementales</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-4">
                    <img src="/kapsuleOnly.svg" alt="Kapsule icon" class="w-12 h-12 text-orange-600" style="filter: invert(26%) sepia(100%) saturate(2500%) hue-rotate(30deg) brightness(95%) contrast(100%);">
                    <div>
                      <h4 class="text-lg font-semibold text-gray-900">Ma Vision</h4>
                      <p class="text-gray-600">
                        Transformer les idées en solutions digitales performantes et accompagner les entreprises 
                        dans leur transformation technologique avec des outils adaptés à leurs besoins.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'À propos - Kapsule',
  ogTitle: 'À propos - Kapsule',
  description: 'Découvrez mon parcours et ma passion pour le développement SaaS',
  ogDescription: 'Découvrez mon parcours et ma passion pour le développement SaaS'
})
</script>