<!-- components/ui/KapsuleLogo.vue -->
<template>
    <div class="flex items-center justify-center">
      <svg 
        width="320" 
        height="120" 
        viewBox="0 0 640 240" 
        xmlns="http://www.w3.org/2000/svg"
        class="kapsule-logo"
      >
        <!-- Capsule pharmaceutique verticale -->
        <g transform="translate(80, 60)">
          <!-- Partie bleue (supérieure) de la capsule -->
          <ellipse cx="60" cy="45" rx="60" ry="45"
                   :fill="capsuleColor"
                   class="transition-colors duration-500"/>
          
          <!-- Partie blanche (inférieure) de la capsule -->
          <ellipse cx="60" cy="75" rx="60" ry="45"
                   fill="white"/>
          
          <!-- Masque pour ne garder que la moitié supérieure bleue -->
          <rect x="0" y="60" width="120" height="60" fill="white"/>
          
          <!-- Masque pour ne garder que la moitié inférieure blanche -->
          <rect x="0" y="0" width="120" height="60" :fill="capsuleColor"/>
          
          <!-- Redessiner les parties correctement -->
          <!-- Partie bleue (moitié haute) -->
          <path d="M 0 60 
                   C 0 26.863, 26.863 0, 60 0 
                   C 93.137 0, 120 26.863, 120 60 
                   L 0 60 Z" 
                :fill="capsuleColor"
                class="transition-colors duration-500"/>
          
          <!-- Partie blanche (moitié basse) -->
          <path d="M 0 60 
                   L 120 60 
                   C 120 93.137, 93.137 120, 60 120 
                   C 26.863 120, 0 93.137, 0 60 Z" 
                fill="white"/>
          
          <!-- Reflet bleu clair sur la partie bleue -->
          <ellipse cx="35" cy="30" rx="18" ry="25"
                   fill="#60A5FA"
                   opacity="0.7"
                   transform="rotate(-15 35 30)"/>
          
          <!-- Contour de la capsule complète -->
          <ellipse cx="60" cy="60" rx="60" ry="60"
                   fill="none"
                   stroke="#1e40af"
                   stroke-width="1.5"/>
        </g>
        
        <!-- Texte KAPSULE -->
        <text x="250" y="140" 
              font-family="Arial, sans-serif" 
              font-weight="bold" 
              font-size="72" 
              :fill="textColor"
              class="transition-colors duration-500">KAPSULE</text>
        
        <!-- Swoosh sous le texte -->
        <path d="M 400 180 Q 480 170 560 185" 
              :stroke="swooshColor" 
              stroke-width="8" 
              fill="none"
              stroke-linecap="round"
              class="transition-colors duration-500"/>
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    progress?: number
  }
  
  const props = withDefaults(defineProps<Props>(), {
    progress: 0
  })
  
  // Couleurs de la capsule qui varient selon la progression
  const capsuleColor = computed(() => {
    const colors = [
      '#1e40af', // Bleu foncé
      '#2563eb', // Bleu
      '#3b82f6', // Bleu clair
      '#60a5fa', // Bleu plus clair
      '#93c5fd', // Bleu très clair
    ]
    const index = Math.floor((props.progress / 100) * (colors.length - 1))
    return colors[Math.min(index, colors.length - 1)]
  })
  
  // Couleurs du texte
  const textColor = computed(() => {
    const colors = [
      '#1e40af',
      '#2563eb',
      '#3b82f6',
      '#0ea5e9',
      '#06b6d4',
    ]
    const index = Math.floor((props.progress / 100) * (colors.length - 1))
    return colors[Math.min(index, colors.length - 1)]
  })
  
  // Couleurs du swoosh
  const swooshColor = computed(() => {
    const colors = [
      '#1e40af',
      '#2563eb',
      '#3b82f6',
      '#0ea5e9',
      '#06b6d4',
    ]
    const index = Math.floor((props.progress / 100) * (colors.length - 1))
    return colors[Math.min(index, colors.length - 1)]
  })
  </script>
  
  <style scoped>
  .kapsule-logo {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
  </style>