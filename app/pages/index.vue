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
          aria-label="Réinitialiser et voir l'écran de chargement"
        >
          Voir l'écran de chargement
        </button>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="flex justify-center items-center mb-3">
              <img src="/kapsuleOnly.svg" alt="Innovation" class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Innovation</h3>
            <p class="text-gray-600">Solutions de pointe pour vos besoins</p>
          </div>
          
          <div class="text-center">
            <div class="flex justify-center items-center mb-3">
              <img src="/kapsuleOnly.svg" alt="Expertise" class="w-16 h-16 mx-auto" />
            </div>
            <h3 class="text-xl font-semibold mb-2">Expertise</h3>
            <p class="text-gray-600">Une équipe expérimentée à votre service</p>
          </div>
          
          <div class="text-center">
            <div class="flex justify-center items-center mb-3">
              <img src="/kapsuleOnly.svg" alt="Qualité" class="w-16 h-16 mx-auto" />
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

const resetLoading = async () => {
  resetVisitStatus()
  await navigateTo('/', { replace: true })
}
</script>