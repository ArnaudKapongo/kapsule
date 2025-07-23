<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-1 gap-8">
        <!-- Logo et description -->
        <div class="md:col-span-2">
          <h3 class="text-xl font-bold mb-4">Kapsule</h3>
          <p class="text-gray-400 mb-6 max-w-md">
            Expert en développement de solutions SaaS. Transformez vos idées en applications web performantes avec un développeur qui comprend vos enjeux business.
          </p>
        </div>
        
        <!-- Liens utiles -->
        <div>
          <h4 class="font-semibold mb-6 text-white">Liens utiles</h4>
          <ul class="space-y-3 text-gray-400">
            <li><NuxtLink to="/about" class="hover:text-white transition-colors">À propos</NuxtLink></li>
            <li><NuxtLink to="/privacy" class="hover:text-white transition-colors">Confidentialité</NuxtLink></li>
          </ul>
        </div>
        
        
      </div>
    </div>
  </footer>
</template>