<template>
  <v-container 
    fluid 
    class="about-section py-16"
    id="about"
  >
    <v-container>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <v-chip
          prepend-icon="mdi-account"
          color="primary"
          variant="outlined"
          class="mb-4"
        >
          Sobre Mim
        </v-chip>
        
        <h2 class="section-title text-h3 font-weight-bold mb-6">
          Conheça minha <span class="text-primary">trajetória</span>
        </h2>
        
        <p class="section-subtitle text-h6 text-medium-emphasis mx-auto">
          Mais de uma década construindo soluções digitais inovadoras
        </p>
      </div>

      <!-- Main Content Grid -->
      <v-row>
        <!-- About Text Content -->
        <v-col cols="12" lg="8">
          <div class="about-content">
            <!-- Intro Paragraph -->
            <v-card
              variant="outlined"
              class="pa-8 mb-8 about-intro-card"
              elevation="0"
            >
              <div class="d-flex align-start mb-4">
                <v-avatar
                  color="primary"
                  size="60"
                  class="mr-4"
                >
                  <v-icon icon="mdi-account" size="30" />
                </v-avatar>
                <div>
                  <h3 class="text-h5 font-weight-bold mb-2">{{ personalInfo.name }}</h3>
                  <p class="text-subtitle-1 text-primary font-weight-medium">
                    {{ personalInfo.title }}
                  </p>
                </div>
              </div>
              
              <p class="text-body-1 text-medium-emphasis mb-4 leading-relaxed">
                Como <strong>Full Stack Developer</strong> no Tribunal de Contas do Distrito Federal (TCDF), 
                atuo no desenvolvimento especializado em <strong>VueJS, API Platform e Vuetify</strong>, 
                criando aplicações robustas e escaláveis para o setor público com interfaces ricas e responsivas.
              </p>
            </v-card>

            <!-- Experience Highlight -->
            <v-row class="mb-8">
              <v-col
                v-for="stat in stats"
                :key="stat.id"
                cols="6"
                md="3"
              >
                <v-card
                  :color="stat.color"
                  variant="flat"
                  class="text-center pa-4 stat-card"
                  height="120"
                >
                  <v-icon
                    :icon="stat.icon"
                    size="32"
                    class="mb-2"
                  />
                  <div class="text-h4 font-weight-bold">{{ stat.value }}</div>
                  <div class="text-caption font-weight-medium">{{ stat.label }}</div>
                </v-card>
              </v-col>
            </v-row>

            <!-- Detailed Description -->
            <v-card
              variant="tonal"
              color="surface-variant"
              class="pa-8"
            >
              <h4 class="text-h6 font-weight-bold mb-4">
                <v-icon icon="mdi-rocket-launch" class="mr-2" />
                Minha Jornada Profissional
              </h4>
              
              <div class="description-content">
                <p class="text-body-1 mb-4">
                  Sou <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong> pelo Grupo Projeção 
                  (2008-2011) e possuo mais de 10 anos de experiência sólida em tecnologias frontend e backend. 
                  Participei de projetos complexos em grandes empresas como Fretebras, SysMap Solutions, 
                  Coopersystem, e órgãos governamentais.
                </p>
                
                <p class="text-body-1 mb-4">
                  Especializo-me em <strong>JavaScript (VueJS, ReactJS, Angular)</strong>, 
                  <strong>PHP com Symfony e API Platform</strong>, Docker, Git, CI/CD e desenvolvimento 
                  de aplicações Full Stack modernas, sempre focado em entregar soluções eficientes 
                  e inovadoras com as melhores práticas de mercado.
                </p>
                
                <v-alert
                  type="info"
                  variant="tonal"
                  class="mt-4"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-lightbulb-on" />
                  </template>
                  <strong>Filosofia de Trabalho:</strong> Acredito que a tecnologia deve servir às pessoas, 
                  criando soluções que realmente fazem a diferença no dia a dia dos usuários.
                </v-alert>
              </div>
            </v-card>
          </div>
        </v-col>

        <!-- Education & Certifications Sidebar -->
        <v-col cols="12" lg="4">
          <div class="education-sidebar">
            <!-- Education Card -->
            <v-card
              variant="outlined"
              class="mb-6 education-card"
              elevation="2"
            >
              <v-card-title class="d-flex align-center pa-6 pb-0">
                <v-icon icon="mdi-school" class="mr-3" color="primary" />
                <span>Formação & Especializações</span>
              </v-card-title>
              
              <v-card-text class="pa-6">
                <v-timeline
                  density="compact"
                  side="end"
                  class="education-timeline"
                >
                  <v-timeline-item
                    v-for="item in education"
                    :key="item.id"
                    :dot-color="getEducationColor(item.type)"
                    size="small"
                  >
                    <div class="education-item">
                      <h4 class="text-subtitle-1 font-weight-bold mb-1">
                        {{ item.degree }}
                      </h4>
                      <p class="text-body-2 text-primary mb-1">
                        {{ item.institution }}
                      </p>
                      <p class="text-caption text-medium-emphasis mb-2">
                        {{ item.period }}
                      </p>
                      <v-chip
                        :color="getEducationColor(item.type)"
                        size="x-small"
                        variant="flat"
                      >
                        {{ item.status }}
                      </v-chip>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>

            <!-- Quick Contact Card -->
            <v-card
              variant="flat"
              color="primary"
              class="text-white contact-quick-card"
            >
              <v-card-text class="pa-6">
                <div class="text-center">
                  <v-icon icon="mdi-chat" size="48" class="mb-4" />
                  <h3 class="text-h6 font-weight-bold mb-2">
                    Vamos conversar?
                  </h3>
                  <p class="text-body-2 mb-4 opacity-90">
                    Sempre aberto para discussões sobre tecnologia e novos projetos
                  </p>
                  
                  <v-btn
                    variant="outlined"
                    color="white"
                    prepend-icon="mdi-email"
                    class="contact-btn"
                    @click="$emit('navigate', 'contact')"
                  >
                    Entrar em Contato
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { personalInfo, education, stats } from '../data/portfolioData.js'

// Emits
defineEmits(['navigate'])

// Methods
const getEducationColor = (type) => {
  const colors = {
    academic: 'primary',
    professional: 'success',
    specialization: 'info',
    technical: 'warning'
  }
  return colors[type] || 'secondary'
}
</script>

<style scoped>
.about-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
}

.section-title {
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-accent)));
  border-radius: 2px;
}

.section-subtitle {
  max-width: 600px;
}

.about-intro-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.9));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s ease;
}

.about-intro-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.stat-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.description-content {
  line-height: 1.8;
}

.leading-relaxed {
  line-height: 1.75;
}

.education-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.education-timeline {
  margin-left: -12px;
}

.education-item {
  padding-bottom: 16px;
}

.contact-quick-card {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-primary-darken-1)));
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.contact-quick-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.4);
}

.contact-btn {
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: white;
  color: rgb(var(--v-theme-primary));
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 1280px) {
  .education-sidebar {
    margin-top: 2rem;
  }
}

/* Animation classes */
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>