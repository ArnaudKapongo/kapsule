<template>
  <div class="min-h-screen">
    <section class="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Bienvenue chez KAPSULE INC
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Votre solution innovante
        </p>
        <button
          @click="resetLoading"
          class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Voir l'écran de chargement
        </button>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Innovation</h3>
            <p class="text-gray-600">Solutions de pointe pour vos besoins</p>
          </div>
          
          <div class="text-center">
            <div class="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Expertise</h3>
            <p class="text-gray-600">Une équipe expérimentée à votre service</p>
          </div>
          
          <div class="text-center">
            <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Qualité</h3>
            <p class="text-gray-600">Excellence dans chaque projet</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Accueil - KAPSULE INC',
  meta: [
    { name: 'description', content: 'KAPSULE INC - Solutions innovantes' }
  ]
})

const { resetVisitStatus } = useInitialLoading()

const resetLoading = () => {
  resetVisitStatus()
  window.location.reload()
}
</script>