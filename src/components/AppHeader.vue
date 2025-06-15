<template>
  <v-app-bar
    :class="{ 'header-scrolled': isScrolled }"
    :style="headerStyles"
    class="header-container"
    elevation="0"
    fixed
    app
    height="70"
  >
    <v-container class="d-flex align-center">
      <!-- Logo -->
      <v-btn
        :ripple="false"
        variant="text"
        class="logo-btn text-h6 font-weight-bold"
        @click="$emit('navigate', 'hero')"
      >
        <span class="gradient-text">Thiago Carvalho</span>
      </v-btn>
      
      <v-spacer />
      
      <!-- Desktop Navigation -->
      <v-sheet
        v-if="!mobile"
        class="nav-container d-flex align-center"
        color="transparent"
      >
        <v-btn
          v-for="item in navigationItems"
          :key="item.id"
          :ripple="false"
          variant="text"
          class="nav-btn mx-2"
          @click="$emit('navigate', item.id)"
        >
          {{ item.label }}
        </v-btn>
        
        <!-- Theme Toggle -->
        <v-btn
          :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          :class="{ 'rotating': themeRotating }"
          variant="outlined"
          size="small"
          class="theme-toggle-btn ml-4"
          @click="handleThemeToggle"
        />
      </v-sheet>
      
      <!-- Mobile Menu Button -->
      <v-btn
        v-if="mobile"
        icon="mdi-menu"
        variant="text"
        @click="mobileDrawer = true"
      />
    </v-container>
    
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
      location="end"
      width="280"
      class="mobile-nav"
    >
      <v-list class="py-8">
        <!-- Mobile Header -->
        <v-list-item class="mb-4">
          <v-list-item-title class="text-h6 font-weight-bold gradient-text">
            Thiago Carvalho 2
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            Full Stack Developer
          </v-list-item-subtitle>
        </v-list-item>
        
        <v-divider class="mb-4" />
        
        <!-- Navigation Items -->
        <v-list-item
          v-for="item in navigationItems"
          :key="item.id"
          :prepend-icon="item.icon"
          :title="item.label"
          class="mobile-nav-item"
          @click="handleMobileNavigation(item.id)"
        />
        
        <v-divider class="my-4" />
        
        <!-- Theme Toggle -->
        <v-list-item
          :prepend-icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          :title="isDark ? 'Modo Claro' : 'Modo Escuro'"
          class="mobile-nav-item"
          @click="handleThemeToggle"
        />
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'

// Props
defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

// Emits
defineEmits(['toggle-theme', 'navigate'])

// Composables
const { mobile } = useDisplay()

// Reactive data
const isScrolled = ref(false)
const mobileDrawer = ref(false)
const themeRotating = ref(false)

// Navigation items
const navigationItems = [
  { id: 'about', label: 'Sobre', icon: 'mdi-account' },
  { id: 'experience', label: 'Experiência', icon: 'mdi-briefcase' },
  { id: 'skills', label: 'Skills', icon: 'mdi-code-tags' },
  { id: 'projects', label: 'Projetos', icon: 'mdi-folder-multiple' },
  { id: 'testimonials', label: 'Depoimentos', icon: 'mdi-comment-quote' },
  { id: 'contact', label: 'Contato', icon: 'mdi-email' }
]

// Computed
const headerStyles = computed(() => ({
  background: isScrolled.value 
    ? 'rgba(255, 255, 255, 0.95)' 
    : 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(20px)',
  borderBottom: isScrolled.value 
    ? '1px solid rgba(0, 0, 0, 0.1)' 
    : '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
}))

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const handleThemeToggle = () => {
  themeRotating.value = true
  setTimeout(() => {
    themeRotating.value = false
  }, 500)
  
  // Emit theme toggle
  const event = new Event('toggle-theme')
  document.dispatchEvent(event)
}

const handleMobileNavigation = (sectionId) => {
  mobileDrawer.value = false
  setTimeout(() => {
    // Emit navigation
    const event = new CustomEvent('navigate', { detail: sectionId })
    document.dispatchEvent(event)
  }, 300)
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-container {
  border-bottom: 53px solid red;
}

.header-scrolled {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
}

.logo-btn {
  text-transform: none !important;
  font-size: 1.2rem !important;
}

.gradient-text {
  background: linear-gradient(135deg, #3B82F6 0%, #F59E0B 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.nav-btn {
  text-transform: none !important;
  font-weight: 500 !important;
  position: relative;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: rgb(var(--v-theme-primary));
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-btn:hover::after {
  width: 80%;
}

.theme-toggle-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  border-color: rgba(59, 130, 246, 0.3) !important;
}

.theme-toggle-btn:hover {
  background: rgb(var(--v-theme-primary)) !important;
  color: white !important;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.rotating {
  animation: rotate 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.mobile-nav {
  background: rgba(var(--v-theme-surface), 0.95) !important;
  backdrop-filter: blur(20px);
}

.mobile-nav-item {
  margin: 4px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  border-bottom: 3px solid darkorange;
}

.mobile-nav-item:hover {
  background: rgba(var(--v-theme-primary), 0.1);
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .nav-container {
    display: none !important;
  }
}
</style>