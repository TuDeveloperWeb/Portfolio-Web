<script setup lang="ts">
import {
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiLanguagePhp,
  mdiVuejs ,
  mdiLaravel,
  mdiNodejs,
  mdiReact,
  mdiDatabase,
  mdiGit,
  mdiLinux,
  mdiLanguageTypescript,
  mdiLanguagePython,
  mdiAws,
  mdiBootstrap,
  mdiDocker,
  mdiMicrosoftOffice,
  mdiVuetify,
  mdiGoogleAnalytics,
  mdiSass 
} from '@mdi/js'

import SvgIcon from '@/components/SvgIcon.vue';

import SQLServerSVG from '@/assets/images/icons/sqlserver-logo.svg?raw'
import MySQLSVG from '@/assets/images/icons/mysql-logo2.svg?raw'
import PostgresSQLServerSVG from '@/assets/images/icons/postgresql-logo.svg?raw'
import ScrumSVG from '@/assets/images/icons/scrum-logo.svg?raw'


const skills = [
  {
    name: 'HTML',
    icon: mdiLanguageHtml5,
    svg: ''
  },
  {
    name: 'CSS',
    icon: mdiLanguageCss3,
    svg: ''
  },
  {
    name: 'JavaScript',
    icon: mdiLanguageJavascript,
    svg: ''
  },
  {
    name: 'PHP',
    icon: mdiLanguagePhp,
    svg: ''
  },
  {
    name: 'Laravel',
    icon: mdiLaravel,
    svg: ''
  },
  {
    name: 'Vue.js',
    icon: mdiVuejs, 
    svg: '',
  },
  {
    name: 'Node.js',
    icon: mdiNodejs,
    svg: ''
  },
  {
    name: 'React.js',
    icon: mdiReact,
    svg: ''
  },
  {
    name: 'MySQL',
    icon: mdiDatabase,
    svg: MySQLSVG,
  },
  {
    name: 'Git',
    icon: mdiGit,
    svg: ''
  },
  {
    name: 'PostgreSQL',
    icon: mdiDatabase, 
    svg: PostgresSQLServerSVG,
  },
  {
    name: 'TypeScript',
    icon: mdiLanguageTypescript,
    svg: ''
  },
  {
    name: 'Scrum',
    icon: mdiDatabase, 
    svg: ScrumSVG,
  },
  {
    name: 'SQL Server',
    icon: mdiDatabase, 
    svg: SQLServerSVG,
  },
  {
    name: 'AWS',
    icon: mdiAws,
    svg: ''
  },
  {
    name: 'Docker',
    icon: mdiDocker, 
    svg: '',
  },
  {
    name: 'REST API',
    icon: mdiDatabase, 
    svg: '',
  },
  {
    name: 'Bootstrap',
    icon: mdiBootstrap,
    svg: ''
  },
  {
    name: 'Power BI',
    icon: mdiGoogleAnalytics,
    svg: ''
  },
  {
    name: 'Python',
    icon: mdiLanguagePython, 
    svg: '',
  },
  {
    name: 'Office',
    icon: mdiMicrosoftOffice,
    svg: ''
  },
  {
    name: 'Vuetify',
    icon: mdiVuetify,
    svg: ''
  },
  {
    name: 'Linux',
    icon: mdiLinux, 
    svg: '',
  },
   {
    name: 'Sass',
    icon: mdiSass,
    svg: ''
  },
]
</script>

<template>
  <section class="skills" id="skills">
    <h3 class="skills__title">Habilidades</h3>
    <div class="skills__container">
          <div class="skills__grid">
            <div class="skills__card" v-for="(skill, index) in skills" :key="index">
              <div class="skills__icon">
              <SvgIcon v-if="skill.svg" :svg="skill.svg" />
                <svg v-else viewBox="0 0 24 24">
                  <path :d="skill.icon" />
                </svg>
              </div>
              <p class="skills__name">{{ skill.name }}</p>
            </div>
          </div>
    </div>
    
  </section>
</template>

<style lang="scss" scoped>
.skills {
  width: 90%;
  margin: 0 auto;

  &__title {
    @include section-title;

  }
    &__container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

 &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px 30px;
    width: 100%;
    max-width: 1200px; // Ajusta este valor según el ancho máximo deseado
  }

  &__card {
    background-color: #140B1B;
    border: 2px solid #3f266b; // púrpura
    border-radius: 12px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 20px rgba(124, 58, 237, 0.3);
      cursor: pointer;
    }
  }

  &__icon {
    margin-bottom: 10px;
    padding-top: 30px;


    svg {
      width: 60px;
      height: 60px;
      fill: #c084fc; // púrpura suave
      transition: fill 0.3s ease;

      .skills__card:hover & {
        fill: #a855f7;
        cursor: pointer;
      }
    }
  }

  &__name {
    font-size: 1rem;
    font-weight: 600;
    color: #e0e0e0;
    text-align: center;
  }
}
</style>
