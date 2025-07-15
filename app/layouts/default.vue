<template>
  <div>
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img 
                src="/kapsule.svg" 
                alt="KAPSULE INC" 
                class="h-16 w-auto"
                role="img"
              />
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">
              Accueil
            </NuxtLink>
            <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">
              À propos
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-800 text-white py-8 mt-12">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2025 MonSite. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>