<template>
  <v-container 
    fluid 
    class="hero-section"
    :style="heroStyles"
  >
    <!-- Background Effects -->
    <div class="hero-background">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="grid-pattern"></div>
    </div>
    
    <!-- Hero Content -->
    <v-container class="hero-content">
      <v-row 
        align="center" 
        justify="center"
        class="min-height-screen"
      >
        <!-- Left Column - Text Content -->
        <v-col 
          cols="12" 
          md="6" 
          class="text-content"
        >
          <!-- Status Badge -->
          <v-chip
            :prepend-icon="'mdi-circle'"
            color="success"
            variant="outlined"
            class="status-badge mb-6 animate-fade-in"
            size="small"
          >
            <span class="status-text">Disponível para projetos</span>
          </v-chip>
          
          <!-- Main Title -->
          <h1 class="hero-title animate-slide-up">
            <span class="text-white">Olá, eu sou</span><br>
            <span class="gradient-text-hero">Thiago Carvalho</span>
          </h1>
          
          <!-- Subtitle with Typewriter Effect -->
          <div class="hero-subtitle animate-slide-up delay-1">
            <span class="text-white">{{ displayText }}</span>
            <span class="cursor">|</span>
          </div>
          
          <!-- Location -->
          <div class="hero-location animate-slide-up delay-2">
            <v-icon icon="mdi-map-marker" size="small" class="mr-2" />
            <span>Brasília, DF • Full Stack Developer no TCDF</span>
          </div>
          
          <!-- Description -->
          <p class="hero-description animate-slide-up delay-3">
            Engenheiro de Software com mais de <strong>10 anos de experiência</strong> 
            sólida em tecnologias de ponta, especializado em desenvolvimento 
            <strong>Frontend e Full Stack</strong>. Domínio em VueJS, ReactJS, Angular e 
            API Platform, criando interfaces dinâmicas e soluções escaláveis.
          </p>
          
          <!-- Action Buttons -->
          <div class="hero-actions animate-slide-up delay-4">
            <v-btn
              color="primary"
              size="large"
              prepend-icon="mdi-briefcase"
              class="cta-button mr-4"
              @click="$emit('navigate', 'experience')"
            >
              Ver Experiência
            </v-btn>
            
            <v-btn
              variant="outlined"
              color="white"
              size="large"
              prepend-icon="mdi-email"
              class="secondary-button"
              @click="$emit('navigate', 'contact')"
            >
              Entrar em Contato
            </v-btn>
          </div>
          
          <!-- Social Links -->
          <div class="social-links animate-slide-up delay-5">
            <v-btn
              v-for="social in socialLinks"
              :key="social.name"
              :icon="social.icon"
              :href="social.url"
              target="_blank"
              variant="text"
              color="white"
              class="social-btn"
              size="large"
            />
          </div>
        </v-col>
        
        <!-- Right Column - Visual Content -->
        <v-col 
          cols="12" 
          md="6" 
          class="visual-content"
        >
          <div class="profile-container">
            <!-- Main Profile Image -->
            <div class="profile-image animate-float">
              <div class="profile-avatar">
                <v-avatar size="280" class="avatar-main">
                  <v-img
                    src="https://via.placeholder.com/280x280/3B82F6/FFFFFF?text=TC"
                    alt="Thiago Carvalho"
                    cover
                  />
                </v-avatar>
                
                <!-- Floating Ring -->
                <div class="floating-ring"></div>
              </div>
            </div>
            
            <!-- Floating Skills -->
            <div class="floating-skills">
              <v-chip
                v-for="(skill, index) in floatingSkills"
                :key="skill"
                :class="`skill-bubble skill-${index + 1}`"
                color="primary"
                variant="elevated"
                size="small"
                class="skill-chip"
                @click="animateSkill(index)"
              >
                {{ skill }}
              </v-chip>
            </div>
            
            <!-- Decorative Elements -->
            <div class="decorative-elements">
              <div class="deco-1"></div>
              <div class="deco-2"></div>
              <div class="deco-3"></div>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <!-- Scroll Indicator -->
      <div class="scroll-indicator animate-bounce">
        <v-btn
          icon="mdi-chevron-down"
          variant="text"
          color="white"
          size="large"
          @click="$emit('navigate', 'about')"
        />
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Emits
defineEmits(['navigate'])

// Reactive data
const displayText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)

// Data
const typewriterTexts = [
  'Full Stack Developer Sr.',
  'Especialista em VueJS',
  'Expert em ReactJS',
  'Desenvolvedor Angular',
  'API Platform Master'
]

const socialLinks = [
  { name: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://linkedin.com/in/thiagobjcarvalho' },
  { name: 'GitHub', icon: 'mdi-github', url: 'https://github.com/thiagobjcarvalho-cw' },
  { name: 'Email', icon: 'mdi-email', url: 'mailto:thiagob.j.carvalho@gmail.com' },
  { name: 'WhatsApp', icon: 'mdi-whatsapp', url: 'tel:+5561982859870' }
]

const floatingSkills = [
  'VueJS', 'ReactJS', 'Angular', 'TypeScript', 
  'API Platform', 'PHP', 'Laravel', 'Vuetify',
  'Full Stack', 'Frontend'
]

// Computed
const heroStyles = {
  background: 'linear-gradient(135deg, #0F0F23 0%, #1a1a3a 50%, #0F0F23 100%)',
  minHeight: '100vh',
  position: 'relative',
  overflow: 'hidden'
}

// Methods
const typeWriter = () => {
  const currentText = typewriterTexts[currentIndex.value]
  
  if (!isDeleting.value && displayText.value.length < currentText.length) {
    displayText.value = currentText.substring(0, displayText.value.length + 1)
    setTimeout(typeWriter, 100)
  } else if (isDeleting.value && displayText.value.length > 0) {
    displayText.value = currentText.substring(0, displayText.value.length - 1)
    setTimeout(typeWriter, 50)
  } else if (!isDeleting.value && displayText.value === currentText) {
    setTimeout(() => {
      isDeleting.value = true
      typeWriter()
    }, 2000)
  } else if (isDeleting.value && displayText.value === '') {
    isDeleting.value = false
    currentIndex.value = (currentIndex.value + 1) % typewriterTexts.length
    setTimeout(typeWriter, 200)
  }
}

const animateSkill = (index) => {
  const skill = document.querySelector(`.skill-${index + 1}`)
  if (skill) {
    skill.style.transform = 'scale(1.2) rotate(360deg)'
    skill.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`
    
    setTimeout(() => {
      skill.style.transform = ''
      skill.style.background = ''
    }, 600)
  }
}

// Lifecycle
onMounted(() => {
  typeWriter()
  
  // Add scroll parallax effect
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector('.hero-section')
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Hero Section Styles */
.hero-section {
  position: relative;
  z-index: 1;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.6;
  animation: float-orb 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #3B82F6, transparent);
  top: -200px;
  left: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #F59E0B, transparent);
  bottom: -150px;
  right: -150px;
  animation-delay: 10s;
}

.orb-3 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #EF4444, transparent);
  top: 50%;
  left: 50%;
  animation-delay: 5s;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 60s linear infinite;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(100px, -100px) rotate(120deg); }
  66% { transform: translate(-50px, 100px) rotate(240deg); }
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

/* Content Styles */
.min-height-screen {
  min-height: 100vh;
}

.status-badge {
  border: 1px solid rgba(34, 197, 94, 0.3) !important;
  background: rgba(34, 197, 94, 0.1) !important;
}

.status-text {
  color: #22C55E;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
}

.gradient-text-hero {
  background: linear-gradient(135deg, #3B82F6 0%, #F59E0B 50%, #EF4444 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 4s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  min-height: 2.2rem;
}

.cursor {
  animation: blink 1s infinite;
  color: #3B82F6;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.hero-location {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 500px;
}

.hero-actions {
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.cta-button {
  background: linear-gradient(135deg, #3B82F6, #2563EB) !important;
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.4);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.6);
}

.secondary-button {
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: white !important;
  color: #0F0F23 !important;
  border-color: white !important;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.social-btn:hover {
  transform: translateY(-4px) scale(1.1);
  color: #3B82F6 !important;
}

/* Visual Content Styles */
.profile-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.profile-image {
  position: relative;
  z-index: 2;
}

.avatar-main {
  border: 4px solid rgba(59, 130, 246, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.floating-ring {
  position: absolute;
  inset: -20px;
  border: 2px solid rgba(245, 158, 11, 0.3);
  border-radius: 50%;
  animation: rotate-ring 20s linear infinite;
}

@keyframes rotate-ring {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.floating-skills {
  position: absolute;
  inset: -60px;
}

.skill-chip {
  position: absolute;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  animation: float-skill 4s ease-in-out infinite;
}

.skill-chip:hover {
  transform: scale(1.1);
  z-index: 10;
}

/* Skill positioning */
.skill-1 { top: 0; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
.skill-2 { top: 15%; right: 0; animation-delay: 0.5s; }
.skill-3 { right: 15%; bottom: 30%; animation-delay: 1s; }
.skill-4 { bottom: 0; right: 30%; animation-delay: 1.5s; }
.skill-5 { bottom: 0; left: 30%; animation-delay: 2s; }
.skill-6 { left: 15%; bottom: 30%; animation-delay: 2.5s; }
.skill-7 { left: 0; top: 50%; transform: translateY(-50%); animation-delay: 3s; }
.skill-8 { top: 15%; left: 15%; animation-delay: 3.5s; }
.skill-9 { top: 30%; right: 10%; animation-delay: 4s; }
.skill-10 { top: 60%; left: 10%; animation-delay: 4.5s; }

@keyframes float-skill {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.decorative-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.deco-1, .deco-2, .deco-3 {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(245, 158, 11, 0.1));
  animation: float-deco 15s ease-in-out infinite;
}

.deco-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 20%;
  animation-delay: 0s;
}

.deco-2 {
  width: 40px;
  height: 40px;
  bottom: 20%;
  left: 20%;
  animation-delay: 5s;
}

.deco-3 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 40%;
  animation-delay: 10s;
}

@keyframes float-deco {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(20px, -20px) scale(1.1); }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slide-up 1s ease-out forwards;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }
.delay-5 { animation-delay: 1s; }

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

@keyframes fade-in {
  to { opacity: 1; }
}

@keyframes slide-up {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

/* Responsive */
@media (max-width: 960px) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .cta-button,
  .secondary-button {
    width: 100%;
    justify-content: center;
  }
  
  .profile-container {
    height: 400px;
    margin-top: 2rem;
  }
  
  .avatar-main {
    width: 200px !important;
    height: 200px !important;
  }
  
  .floating-skills {
    inset: -40px;
  }
  
  .skill-chip {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
}
</style>