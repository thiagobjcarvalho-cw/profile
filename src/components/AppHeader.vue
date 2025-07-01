<template>
  <v-app-bar
    :class="{ 'header-scrolled': isScrolled }"
    class="header-container"
    elevation="0"
    fixed
    app
    height="70"
  >
    <v-container class="d-flex align-center">
      <v-btn
        :ripple="false"
        variant="text"
        class="logo-btn text-h6 font-weight-bold gradient-text"
        @click="$emit('navigate', 'hero')"
      >
        Thiago Carvalho
      </v-btn>
      
      <v-spacer />
      
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
          :class="isScrolled ? 'text-grey-darken-3' : 'text-white'"
          @click="$emit('navigate', item.id)"
        >
          {{ item.label }}
        </v-btn>
        
        <v-btn
          :icon="isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'"
          :class="{ 'rotating': themeRotating }"
          variant="outlined"
          :color="isScrolled ? 'primary' : 'white'"
          size="small"
          class="theme-toggle-btn ml-4"
          @click="handleThemeToggle"
        />
      </v-sheet>
      
      <v-btn
        v-if="mobile"
        icon="mdi-menu"
        variant="text"
        :color="isScrolled ? 'primary' : 'white'"
        @click="mobileDrawer = true"
      />
    </v-container>
    
    <v-navigation-drawer
      v-model="mobileDrawer"
      temporary
      location="end"
      width="280"
      class="mobile-nav"
    >
      <v-list class="py-8">
        <v-list-item class="mb-4">
          <v-list-item-title class="text-h6 font-weight-bold gradient-text">
            Thiago Carvalho
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            Full Stack Developer
          </v-list-item-subtitle>
        </v-list-item>
        <v-divider class="mb-4" />
        <v-list-item
          v-for="item in navigationItems"
          :key="item.id"
          :prepend-icon="item.icon"
          :title="item.label"
          class="mobile-nav-item"
          @click="handleMobileNavigation(item.id)"
        />
        <v-divider class="my-4" />
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
import { navigationItems } from '../data/portfolioData.js'

defineProps({ isDark: { type: Boolean, default: false } })
const emit = defineEmits(['toggle-theme', 'navigate'])
const { mobile } = useDisplay()
const isScrolled = ref(false)
const mobileDrawer = ref(false)
const themeRotating = ref(false)

const handleScroll = () => { isScrolled.value = window.scrollY > 50 }
const handleThemeToggle = () => {
  themeRotating.value = true
  setTimeout(() => { themeRotating.value = false }, 500)
  emit('toggle-theme')
}
const handleMobileNavigation = (sectionId) => {
  mobileDrawer.value = false
  setTimeout(() => { emit('navigate', sectionId) }, 300)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<style scoped>
/* Animação de gradiente reutilizável */
@keyframes gradient-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.header-container {
  /* Fundo inicial e transição suave */
  background-color: rgba(10, 10, 10, 0.8) !important;
  transition: background-color 0.4s ease;
  backdrop-filter: blur(10px);
  /* Remove a borda para usar o pseudo-elemento */
  border-bottom: none !important;
  position: relative; /* Necessário para o pseudo-elemento */
}

/* Pseudo-elemento para a borda animada */
.header-container::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg, 
    rgb(var(--v-theme-primary)), 
    #F59E0B, 
    #FFFFFF, 
    rgb(var(--v-theme-primary))
  );
  background-size: 300% 300%;
  animation: gradient-flow 6s ease-in-out infinite;
}

.header-scrolled {
  background-color: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Estilo para o texto do logo com gradiente animado */
.gradient-text {
  background: linear-gradient(
    90deg, 
    rgb(var(--v-theme-primary)), 
    #F59E0B, 
    #FFFFFF, 
    rgb(var(--v-theme-primary))
  );
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-flow 6s ease-in-out infinite;
}

.logo-btn {
  text-transform: none !important;
  font-size: 1.2rem !important;
}

.nav-btn {
  text-transform: none !important;
  font-weight: 500 !important;
  position: relative;
  transition: color 0.4s ease;
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
}

.theme-toggle-btn:hover {
  transform: scale(1.05);
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
}

.mobile-nav-item:hover {
  background: rgba(var(--v-theme-primary), 0.1);
}
</style>