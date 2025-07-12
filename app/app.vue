<template>
  <div>
    <!-- Écran de chargement -->
    <UiLoadingScreen 
      :is-loading="isLoading" 
      :progress="progress" 
    />
    
    <!-- Contenu principal -->
    <div
      class="transition-opacity duration-500"
      :class="{ 'opacity-0': isLoading }"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading, progress, checkFirstVisit, simulateLoading } = useInitialLoading()

onMounted(async () => {
  checkFirstVisit()
  await simulateLoading(3000) // 3 secondes
})

useHead({
  title: 'KAPSULE INC',
  meta: [
    { name: 'description', content: 'KAPSULE INC - Solutions innovantes' }
  ]
})
</script>