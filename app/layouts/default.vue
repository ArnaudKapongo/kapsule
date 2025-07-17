<template>
  <div>
    <header class="bg-white backdrop-blur-sm sticky top-0 z-50 shadow-lg border-b border-gray-100">
      <nav class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/kapsule.svg" 
              alt="KAPSULE INC" 
              class="h-14 w-auto"
              role="img"
            />
          </NuxtLink>
          
          <!-- Navigation -->
          <div class="flex items-center space-x-8">
            <NuxtLink to="/" 
                      class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                      active-class="text-gray-900">
              Accueil
            </NuxtLink>
            <NuxtLink to="/about" 
                      class="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                      active-class="text-gray-900">
              À propos
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2025 KAPSULE. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>