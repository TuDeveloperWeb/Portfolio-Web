<script setup lang="ts">
import {
  mdiMapMarker,
  mdiEmail,
  mdiPhoneOutline,
  mdiFacebook,
  mdiWhatsapp,
  mdiLinkedin,
  mdiGithub
} from '@mdi/js';
import { reactive } from 'vue';

interface ContactInfo {
  name: string;
  role: string;
  address: string;
  email: string;
  phone: string;
  socialLinks: SocialLinks;
}

interface SocialLinks {
  facebook: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

// Definición de interfaces
interface ContactIcons {
  address: string;
  email: string;
  phone: string;
}

interface SocialIcons {
  facebook: string;
  whatsapp: string;
  linkedin: string;
  github: string;
}

// Datos tipados
const contactIcons: ContactIcons = {
  address: mdiMapMarker,
  email: mdiEmail,
  phone: mdiPhoneOutline
};

const socialIcons: SocialIcons = {
  facebook: mdiFacebook,
  whatsapp: mdiWhatsapp,
  linkedin: mdiLinkedin,
  github: mdiGithub
};

const contactInfo: ContactInfo = {
  name: "Oscar Añamaco Ruiz",
  role: "Ingeniero de Sistemas",
  address: "Av. José Carlos Mariátegui",
  email: "ruis_16@hotmail.com",
  phone: "913 747 698",
  socialLinks: {
    facebook: "https://www.facebook.com/oscar.a.ruiz.395",
    whatsapp: "https://wa.link/kuklba",
    linkedin: "#",
    github: "https://github.com/TuDeveloperWeb?tab=repositories"
  }
};

// Reactive form data
const formData = reactive<FormData>({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = (): void => {
  console.log('Formulario enviado:', formData);
  // Aquí iría la lógica para enviar el formulario
};
</script>

<template>
  <section class="contact" id="contact">
    <h2 class="contact__title">Contacto</h2>

    <div class="contact__container">
      <!-- Sección de información -->
      <div class="contact__info">
        <p class="contact__info-title">Póngase en contacto</p>
        
        <p class="contact__info-paragraph">
          {{ contactInfo.name }}<br>
          <span class="contact__info-role">{{ contactInfo.role }}</span>
        </p>
        
        <div class="contact__details">
          <p v-for="(icon, key) in contactIcons" :key="key" class="contact__detail">
            <svg class="contact__icon" viewBox="0 0 24 24">
              <path :d="icon" />
            </svg>
            <span class="contact__detail-text">
              {{ contactInfo[key] || '' }}
            </span>
          </p>
        </div>
        
        <ul class="contact__social">
          <li v-for="(icon, platform) in socialIcons" :key="platform" class="contact__social-item">
            <a 
              class="contact__social-link" 
              :href="contactInfo.socialLinks[platform]" 
              target="_blank"
              :aria-label="`Enlace a ${platform}`"
              rel="noopener noreferrer"
            >
              <svg class="social__icon" viewBox="0 0 24 24">
                <path :d="icon" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Formulario -->
      <form id="form" class="form" @submit.prevent="handleSubmit">
        <h3 class="form__title">Contáctenos</h3>
        <div class="form__container">
          <div class="form__group" data-aos="fade-up-left">
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              class="form__input" 
              placeholder=" " 
              required
            />
            <label for="name" class="form__label">Nombre</label>
            <span class="form__line"></span>
          </div>
          
          <div class="form__group" data-aos="fade-up-left">
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              class="form__input" 
              placeholder=" " 
              required
            />
            <label for="email" class="form__label">Correo</label>
            <span class="form__line"></span>
          </div>
          
          <div class="form__group form__group--textarea" data-aos="fade-up-left">
            <textarea 
              id="message" 
              v-model="formData.message"
              class="form__input" 
              placeholder=" " 
              required
            ></textarea>
            <label for="message" class="form__label">Mensaje</label>
            <span class="form__line"></span>
          </div>
          
          <button type="submit" class="form__submit" data-aos="fade-up">
            Enviar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  width: 90%;
  margin: 0 auto;

    &__container {
        display: grid;
        margin: 0 auto;
        width: 90%;
        max-width: 820px;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
        box-shadow: 0 0 20px 0 rgb(255 255 255 / 30%);
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }
    &__title {
        @include section-title;
    }

    &__info {
        padding: 2.3rem 2.2rem;
        position: relative;
        background-color: #160B1D;
        width: 100%;
        height: 100%;
    }

    &__info-title {
        font-size: 1.5rem;
        color: #fff;
        margin-bottom: 10px;
        font-weight: 600;
        line-height: 1;
        align-items: center;
    }

    &__info-paragraph {
        margin: 1.5rem 0 2rem 0;
        line-height: 1.7;
    }

    &__info-role {
        font-style: italic;
        font-weight: 400;
    }

    &__details {
        margin-bottom: 10px;
    }

    &__detail {
        display: flex;
        align-items: center;
        margin: 0.7rem 0;
        font-size: 0.95rem;
        color: #fff;
    }

    &__icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        fill: #fff;
    }

    &__detail-text {
        font-size: 1rem;

    }

    &__social {
        display: flex;
        gap: 20px;
        padding: 0;
        margin-top: 80px;
        margin-bottom: 60px;
    }

    &__social-item {
        list-style: none;
    }

    &__social-link {
        position: relative;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #593c96;
        border-radius: 50%;
        border: none;
        font-size: 26px;
        color: #666;
        transition: 0.5s;
        text-decoration: none;
        outline: none; 
       
    }

    .social__icon {
        width: 28px;
        height: 28px;
        fill: #cecaca;
    }
       &__social-link:hover  {
        color: #ffee10;
        box-shadow: 0 0 15px #ffee10;
        // text-shadow: 0 0 5px #ffee10;
        transform: scale(1.1);

        .social__icon {
            fill: #ffee10;
        }
    }
}

.form {
        background-color: #060709;
        padding: 2.3em 3em;
        box-shadow: 0px 5px 10px -5px rgba(0 0 0 /30%);
        text-align: center;
        position: relative; 
        height: 100%;
        width: 100%;


        &::before{
            content: "";
            position: absolute;
            width: 26px;
            height: 26px;
            background-color: #000;
            transform: rotate(45deg);
            top: 50px;
            left: -13px;
        }
        &__title {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 10px;
            font-weight: 600;
            line-height: 1;
            align-items: center;
        }
        &__container {
            display: grid;
            gap: 1rem;
        }

        &__group {
            position: relative;
            color: #382e0d7e;

            &--textarea {
                textarea {
                    min-height: 150px;
                    border: none;
                    line-height: 1.5;
                    resize: none;
                    overflow-y: auto;
                }
            }
        }

        &__input {
            width: 100%;
            background: none;
            color: #e9d7d7;
            font-size: 1rem;
            padding: 0.6em 0.3em;
            border: none;
            outline: none;
            border-bottom: 1px solid #ffef107e;
            letter-spacing: 0.5px;
        }

        &__label {
            color: #db7ff17e;
            cursor: pointer;
            position: absolute;
            top: 0;
            left: 5px;
            transform: translate(10px);
            transition: transform 0.5s, color 0.3s;
        }

        &__line {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            background: currentColor;
            transition: width 0.3s ease;
        }

        &__input:focus + &__label,
        &__input:not(:placeholder-shown) + &__label {
            transform: translateY(-12px) scale(0.7);
            transform-origin: left top;
            color: #e8a9f57e;
        }

        &__input:focus ~ &__line {
            width: 100%;
        }

        &__submit {
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            @include btn-primary;
        }
    }



</style>
