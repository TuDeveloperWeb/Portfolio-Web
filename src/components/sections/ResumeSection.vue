<script setup lang="ts">
import { mdiDownload } from '@mdi/js';
</script>

<template>
  <section class="about" id="resume">
    <h3 class="about__title">Sobre mí</h3>

    <div class="about__body">
      <div class="about__content">
        <p class="about__text">
          Soy bachiller en Ingeniería de Sistemas de la Universidad Nacional del Callao, con experiencia consolidada en el desarrollo de software. Mi enfoque se centra en la creación de aplicaciones web que no solo sean escalables, sino también de alta calidad, brindando soluciones tecnológicas efectivas y eficientes.
        </p>
        <p class="about__text">
          Proactivo, sinérgico y con ganas de aprender y trabajar en equipo para alcanzar un determinado objetivo.
        </p>
        <a href="/public/Curriculum Vitae.pdf" download class="about__cta">
          <span class="about__cta-text">Descargar CV</span>
          <svg class="about__cta-icon" viewBox="0 0 24 24" width="24" height="24">
            <path :d="mdiDownload" fill="currentColor" />
          </svg>
        </a>
      </div>

      <div class="about__photo-wrapper">
        <img src="/src/assets/foto.jpg" alt="Foto de perfil" class="about__photo" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  width: 90%;
  margin: 0 auto;

  &__title {
    @include section-title;
  }


  &__body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  &__content {
    flex: 1 1 300px;
    color: var(--text-color);
    line-height: 1.7;

    .about__text {
      margin-bottom: 1rem;
    }

    .about__cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      color: #8e44ad;
      background-color: transparent;
      border: 2px solid #8e44ad;
      border-radius: 5px;
      font-weight: 700;
      font-size: 0.94rem;
      transition: background 0.3s, color 0.3s;

      &:hover {
        background-color: #8e44ad;
        color: #fff;
      }

      .about__cta-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
      }
    }
  }

  &__photo-wrapper {
    flex: 0 0 250px;
    display: flex;
    justify-content: center;
  }

  &__photo {
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    // max-width: 250px;
    // border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
}
</style>
