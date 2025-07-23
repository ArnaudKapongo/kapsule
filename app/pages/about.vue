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

    <!-- About Section -->
    <section class="relative py-20 z-10">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          
          <!-- Page Heading -->
          <div class="text-center mb-16">
            <div class="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 shadow-lg">
              <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              <span class="text-sm font-medium">À propos d'Arnaud Kapongo</span>
            </div>
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
              Mon Parcours
            </h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">
              Plus de 10 ans d'expertise en développement SaaS et solutions innovantes
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Photo Column -->
            <div class="text-center">
              <div class="relative">
                <img src="/moi.jpeg" alt="Arnaud Kapongo - Expert développeur SaaS avec plus de 10 ans d'expérience" class="w-80 h-80 rounded-2xl mx-auto shadow-2xl object-cover border-4 border-white/20 grayscale">
                <div class="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <!-- Contact Links -->
              <div class="mt-8 flex justify-center gap-6">
                <a href="https://fr.linkedin.com/in/arnaud-kapongo-23241b161" target="_blank" class="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                  <div class="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span class="font-medium">LinkedIn</span>
                </a>
                <a href="mailto:kapsulecompagnie@gmail.com" class="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                  <div class="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.273L12 10.845l10.091-7.024h.273c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <span class="font-medium">Email</span>
                </a>
              </div>
            </div>
            
            <!-- Profile & Expertise Column -->
            <div class="space-y-6">
              <div class="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg p-6 relative overflow-hidden max-w-lg">
                <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400"></div>
                <h3 class="text-2xl font-bold text-white mb-4">Profil & Expertise</h3>

                <!-- Vision Blocks -->
                <div class="space-y-4">
                  <!-- Experience Block -->
                  <div class="p-4 bg-white/20 rounded-lg border border-white/30 flex items-start gap-3 border-l-4 border-blue-400">
                    <div class="flex-shrink-0 w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                      <span class="text-white">📈</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-white mb-1">Années d'Expérience</h4>
                      <p class="text-xs text-gray-100 leading-relaxed">
                        Plus d'une décennie de projets mobiles et web, de la startup au grand compte.
                      </p>
                    </div>
                  </div>
                  <!-- Key Sectors Block -->
                  <div class="p-4 bg-white/20 rounded-lg border border-white/30 flex flex-col gap-3 border-l-4 border-violet-400">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-violet-400 rounded-lg flex items-center justify-center">
                        <span class="text-white">🏢</span>
                      </div>
                      <h4 class="text-sm font-bold text-white mb-1">Secteurs Clés</h4>
                    </div>
                    <!-- Client Badges integrated here -->
                    <div class="flex flex-wrap gap-2">
                      <span class="px-2 py-1 bg-blue-600 text-white rounded-full text-xs">Ministère de la Justice</span>
                      <span class="px-2 py-1 bg-violet-600 text-white rounded-full text-xs">GIE Sesam Vitale</span>
                      <span class="px-2 py-1 bg-cyan-600 text-white rounded-full text-xs">Desoutter</span>
                    </div>
                    <p class="text-xs text-gray-100 leading-relaxed mt-2">
                      Justice, santé, industrie : des applis critiques avec exigences de sécurité et fiabilité.
                    </p>
                  </div>
                  <!-- Vision Block -->
                  <div class="p-4 bg-white/20 rounded-lg border border-white/30 flex items-start gap-3 border-l-4 border-cyan-400">
                    <div class="flex-shrink-0 w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center">
                      <span class="text-white">🚀</span>
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-white mb-1">Ma Vision</h4>
                      <p class="text-xs text-gray-100 leading-relaxed">
                        Transformer les idées en solutions SaaS performantes et adaptatives, à haute valeur ajoutée.
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
useHead({
  title: 'À propos d\'Arnaud Kapongo | Expert Développement SaaS | Kapsule',
  meta: [
    { name: 'description', content: 'Découvrez le parcours d\'Arnaud Kapongo, expert en développement SaaS avec +10 ans d\'expérience. Spécialiste des solutions sur mesure pour entreprises innovantes.' },
    { name: 'keywords', content: 'Arnaud Kapongo, développeur SaaS, expert, parcours, expérience, applications web, freelance, Kapsule' },
    { name: 'author', content: 'Arnaud Kapongo' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'À propos d\'Arnaud Kapongo | Expert Développement SaaS' },
    { property: 'og:description', content: 'Découvrez le parcours d\'Arnaud Kapongo, expert en développement SaaS avec +10 ans d\'expérience.' },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: 'https://kapsule.fr/about' },
    { property: 'og:image', content: 'https://kapsule.fr/moi.jpeg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'À propos d\'Arnaud Kapongo | Expert SaaS' },
    { name: 'twitter:description', content: 'Expert en développement SaaS avec +10 ans d\'expérience.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://kapsule.fr/about' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Arnaud Kapongo",
        "jobTitle": "Développeur SaaS",
        "description": "Expert en développement de solutions SaaS avec plus de 10 ans d'expérience",
        "url": "https://kapsule.fr/about",
        "image": "https://kapsule.fr/moi.jpeg",
        "email": "kapsulecompagnie@gmail.com",
        "knowsAbout": ["Développement SaaS","React","Vue.js","Node.js","Python","Applications web"],
        "hasOccupation": {"@type": "Occupation","name": "Développeur SaaS","occupationLocation": {"@type": "Country","name": "France"}},
        "worksFor": {"@type": "Organization","name": "Kapsule","url": "https://kapsule.fr"}
      })
    }
  ]
})
const getParticleStyle = () => ({ left: `${Math.random()*100}%`, animationDelay: `${Math.random()*20}s`, animationDuration: `${20+Math.random()*20}s` })
</script>

<style scoped>
.floating-particles { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; pointer-events: none; }
.particle { position: absolute; width: 3px; height: 3px; background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4); border-radius: 50%; animation: float linear infinite; box-shadow: 0 0 6px rgba(59,130,246,0.8); }
@keyframes float { 0%{transform:translateY(100vh) translateX(0) rotate(0);opacity:0;}10%{opacity:1;}90%{opacity:1;}100%{transform:translateY(-100px) translateX(100px) rotate(360deg);opacity:0;} }
.particle:nth-child(odd){background:linear-gradient(45deg,#8b5cf6,#ec4899);box-shadow:0 0 6px rgba(139,92,246,0.8);} 
.particle:nth-child(3n){background:linear-gradient(45deg,#06b6d4,#3b82f6);box-shadow:0 0 6px rgba(6,182,212,0.8);} 
</style>
