<script setup lang="ts">
import { mdiEye, mdiGithub } from '@mdi/js'
import { ref } from 'vue';
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';
import project3 from '@/assets/images/project3.png';

const portfolioItems = ref([
    {
        title: 'Sistema de Gestión de Ventas',
        description: 'Descripción del proyecto 1',
        image: project1,
        link: '#',
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: project2,
        link: '#',
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: project3,
        link: '#',
    },
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        image: project1,
        link: '#',
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: project2,
        link: '#',
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: project3,
        link: '#',
    },
]);

</script>

<template>
    <div class="portfolio" id="portafolio">
        <h3 class="portfolio__title">Portafolio</h3>
        <div class="portfolio__grid">
            <div class="portfolio__card" v-for="(item, index) in portfolioItems" :key="index">
                <div class="portfolio__image-layer">
                    <img :src="item.image" alt="Imagen del proyecto" class="portfolio__image" />
                    <div class="portfolio__overlay-title">{{ item.title }}</div>
                </div>
                <div class="portfolio__content">
                    <h4 class="portfolio__project-title">{{ item.title }}</h4>
                    <p class="portfolio__description">{{ item.description }}</p>
                    <div class="portfolio__actions">
                        <a :href="item.link" class="portfolio__button">
                            <svg class="portfolio__icon" viewBox="0 0 24 24">
                                <path :d="mdiEye" />
                            </svg>
                            Ver Proyecto
                        </a>
                        <a :href="item.link" class="portfolio__button">
                            <svg class="portfolio__icon" viewBox="0 0 24 24">
                                <path :d="mdiGithub" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  <style scoped lang="scss">
  .portfolio {
    width: 90%;
    margin: 0 auto;
  
    &__title {
     @include section-title;
    }
  
    &__grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      margin-top: 20px;
    }
  
    &__card {
      width: 320px;
      height: 350px;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px white;
      transition: transform 0.3s ease;
  
      &:hover .portfolio__image-layer {
        transform: translateY(-100%);
        opacity: 0;
      }
  
      &:hover .portfolio__content {
        transform: translateY(0);
        opacity: 1;
      }
    }
  
    &__image-layer,
    &__content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transition: transform 0.5s ease, opacity 0.5s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    &__image-layer {
      z-index: 1;
  
      .portfolio__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
  
      .portfolio__overlay-title {
        position: absolute;
        bottom: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-weight: bold;
        text-align: center;
        padding: 10px 0;
        font-size: 16px;
      }
    }
  
    &__content {
      z-index: 2;
      background: linear-gradient(180deg, #683CC1 0%, #2C1654 100%);
      color: #fff;
      transform: translateY(100%);
      opacity: 0;
      padding: 20px;
      text-align: center;
  
      .portfolio__actions {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 15px;
      }
    }
  
    &__project-title {
      font-size: 1.2rem;
      font-weight: bold;
    }
  
    &__description {
      margin-top: 10px;
      font-size: 0.95rem;
    }
  
    &__button {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 12px;
      text-decoration: none;
      color: #007bff;
      background-color: #fff;
      border: 2px solid #007bff;
      border-radius: 5px;
      font-weight: bold;
      transition: all 0.3s ease;
  
      &:hover {
        background-color: #ffc632;
        color: #000;
      }
  
      .portfolio__icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    }
  }
  </style>
  