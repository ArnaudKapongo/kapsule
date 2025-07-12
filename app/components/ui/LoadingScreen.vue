<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-500"
    :class="{ 'opacity-0 pointer-events-none': !isLoading }"
  >
    <div class="text-center">
      <!-- Logo KAPSULE avec animation -->
      <div class="mb-8">
        <UiKapsuleLogo :progress="progress" />
      </div>

      <!-- Texte de chargement -->
      <p class="mt-8 text-lg text-gray-600 animate-pulse font-medium">
        Chargement en cours...
      </p>

      <!-- Barre de progression -->
      <div class="w-80 h-1.5 mx-auto mt-6 bg-gray-300 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-300 ease-out"
          :class="progressBarColor"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <!-- Pourcentage -->
      <div class="mt-4 text-sm text-gray-500 font-mono">
        {{ Math.round(progress) }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isLoading: boolean
  progress?: number
}

const props = withDefaults(defineProps<Props>(), {
  progress: 0
})

// Couleur de la barre de progression qui suit le logo
const progressBarColor = computed(() => {
  if (props.progress < 20) return 'bg-blue-800'
  if (props.progress < 40) return 'bg-blue-600'
  if (props.progress < 60) return 'bg-blue-500'
  if (props.progress < 80) return 'bg-sky-500'
  return 'bg-cyan-500'
})
</script>