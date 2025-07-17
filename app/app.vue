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
        <NuxtPage 
          :transition="{
            name: getTransitionName(),
            mode: 'out-in'
          }"
        />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading, progress, checkFirstVisit, simulateLoading } = useInitialLoading()
const route = useRoute()
const previousRoute = ref('')

// Système de transition directionnelle
const getTransitionName = () => {
  const current = route.path
  const previous = previousRoute.value
  
  // Home vers About : slide vers la gauche
  if (previous === '/' && current === '/about') return 'slide-left'
  // About vers Home : slide vers la droite
  if (previous === '/about' && current === '/') return 'slide-right'
  
  return 'page' // transition par défaut
}

// Surveiller les changements de route
watch(() => route.path, (newPath, oldPath) => {
  previousRoute.value = oldPath || ''
})

onMounted(async () => {
  checkFirstVisit()
  await simulateLoading(3000) // 3 secondes
})

useHead({
  title: 'KAPSULE',
  meta: [
    { name: 'description', content: 'KAPSULE INC - Solutions innovantes' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/kapsuleOnly.svg' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ]
})
</script>

<style>
/* Transitions par défaut */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Transition Home vers About (slide-left) */
.slide-left-enter-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-left-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.95);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(1.05);
}

/* Transition About vers Home (slide-right) */
.slide-right-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-right-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px) scale(0.95);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px) scale(1.05);
}

/* Layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Optimisations performance */
.page-enter-active,
.page-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Support pour reduced motion */
@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.1s !important;
  }
}

/* Optimisations mobile */
@media (max-width: 768px) {
  .slide-left-enter-from,
  .slide-left-leave-to,
  .slide-right-enter-from,
  .slide-right-leave-to {
    transform: translateX(30px) scale(0.98);
  }
}
</style>