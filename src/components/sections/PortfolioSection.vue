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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Nuevos estilos para el borde animado */
    border: none;
    isolation: isolate; /* Para contener el z-index */

    /* Efecto hover principal (manteniendo tu animación original) */
    &:hover .portfolio__image-layer {
      transform: translateY(-100%);
      opacity: 0;
    }

    &:hover .portfolio__content {
      transform: translateY(0);
      opacity: 1;
      box-shadow: 0 12px 40px rgba(106, 13, 173, 0.4);
    }

    /* Capa del borde animado */
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      z-index: -1;
      background: linear-gradient(90deg, 
        #9c27b0, 
        #d500f9, 
        #4a148c, 
        #7c4dff
      );
      background-size: 400%;
      border-radius: 12px;
      opacity: 0;
      transition: opacity 1s ease-out; 
    }

    /* Animación al hacer hover */
    &:hover::before {
      opacity: 1;
      animation: animate-border 8s linear infinite; 
    }
  }

  /* Animación del borde */
  @keyframes animate-border {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
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
    background: linear-gradient(135deg, #4a148c 0%, #7b1fa2 50%, #9c27b0 100%);
    box-shadow: 0 8px 32px rgba(106, 13, 173, 0.3);
    color: #fff;
    transform: translateY(100%);
    opacity: 0;
    padding: 20px;
    text-align: center;
    margin: 2px; /* Para dejar espacio al borde animado */
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 8px; /* Un poco menos que el card para que coincida con el borde */

    .portfolio__actions {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }
  }

  &__project-title {
    font-size: 1.2rem;
    color: #ffffff; /* Blanco puro para títulos */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); /* Sombra para mejor legibilidad */
    font-weight: 600; /* Peso semibold */
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
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(187, 46, 128, 0.2);
      transform: translateY(-2px);
    }

    .portfolio__icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }
  }
}

/* Versión alternativa con efecto de dibujado (opcional) */

// @keyframes draw-border {
//   0% {
//     clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
//   }
//   25% {
//     clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
//   }
//   50% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   }
//   75% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%);
//   }
//   100% {
//     clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//   }
// }

// .portfolio__card:hover::before {
//   animation: draw-border 1.5s ease-in-out forwards,
//              animate-border 3s linear infinite 1.5s;
// }


@media (hover: none) {
  .portfolio__card::before {
    display: none;
  }
}
</style>
  