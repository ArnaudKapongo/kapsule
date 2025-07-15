<!-- components/ui/KapsuleLogo.vue -->
<template>
    <div class="flex justify-center items-center w-full max-w-xs mx-auto">
      <!-- SVG avec seulement les changements de couleur -->
      <img
        src="/kapsule.svg"
        alt="Kapsule Logo"
        class="w-full h-auto transition-all duration-500"
        :style="dynamicStyle"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    progress?: number
  }
  
  const props = withDefaults(defineProps<Props>(), {
    progress: 0
  })
  
  // Style dynamique - seulement les couleurs
  const dynamicStyle = computed(() => {
    // Calcul de la teinte (0 à 180 degrés)
    const hue = (props.progress / 100) * 180
    
    // Calcul de la luminosité (1 à 1.3)
    const brightness = 1 + (props.progress / 100) * 0.3
    
    // Calcul de la saturation (0.8 à 1.2)
    const saturation = 0.8 + (props.progress / 100) * 0.4
    
    return {
      filter: `hue-rotate(${hue}deg) brightness(${brightness}) saturate(${saturation})`,
      background: 'transparent'
    }
  })
  </script>
  
  <style scoped>
  /* Suppression complète du cadre et des effets */
  img {
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .max-w-xs {
      max-width: 12rem;
    }
  }
  </style>