<script setup lang="ts">
import PortfolioSection from '../components/sections/PortfolioSection.vue';
import ResumeSection from '../components/sections/ResumeSection.vue';
import SkillsSection from '../components/sections/SkillsSection.vue';
import ContactSection from '../components/sections/ContactSection.vue';

// Importando el fondo-purple

</script>

<template>
   <div class="container">
        <section id="home" class="full-height">
            <p>Bienvenido</p>
        </section>

        <section class="section-resume" id="resume">
            <ResumeSection />
        </section>
  
        <section class="section-skills" id="skills">
             <SkillsSection />
        </section>

        <section class="portfolio-section" id="portfolio">
            <PortfolioSection 
            />
        </section>
        <section class="section-contact" id="contact">
            <ContactSection 
            />
        </section>
   </div>
</template>

<style lang="scss">
    .section-resume {
        background-image: url('@/assets/images/background-purple5.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 40px 80px 40px 40px;
    }
    .section-skills {
        background-color: #050809;
        padding: 40px;
    }
    .portfolio-section {
        background-color: #0F0716  ;
        padding: 40px 40px 80px 40px;
    }
    .section-contact {
        background-color: #201438  ;
        padding: 40px 40px 80px 40px;
    }

</style>