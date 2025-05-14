<script setup lang="ts">
const scrollTo = (sectionId: string) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' // Alinea la sección en la parte superior
    })
    history.pushState(null, '', `#${sectionId}`)
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  history.pushState(null, '', window.location.pathname) // Elimina el hash
}
</script>

<template>
  <nav class="navigation">
    <a href="#" @click.prevent="scrollToTop" class="nav-link">Home</a>
    <a href="#resume" @click.prevent="() => scrollTo('resume')" class="nav-link">Resumen</a>
    <a href="#portfolio" @click.prevent="() => scrollTo('portfolio')" class="nav-link">Portafolio</a>
    <a href="#contact" @click.prevent="() => scrollTo('contact')" class="nav-link">Contacto</a>
  </nav>
</template>

  
<style scoped lang="scss">

  $nav-bg: #0E0A1D;
  $nav-text: #f3f4f6;
  $nav-accent: #ffc632;
  $nav-height: 4rem;


.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem; 
  background-color: $nav-bg; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4 2rem;
  z-index: 50;
  border-bottom: 1px solid #374151;
}

.nav-link {
  margin: 0 1.25rem;
  color: $nav-text; /* Gris claro */
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: $nav-accent;
    
    &::after {
      width: 100%;
      background-color: $nav-accent;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  
  &:active {
    color: $nav-accent;
    transform: translateY(1px);
  }
}

/* Estilo para el link activo (cuando la sección está visible) */
.nav-link.router-link-active,
.nav-link:focus {
  color: $nav-accent;
  
  &::after {
    width: 100%;
    background-color: $nav-accent;
  }
}

/* Responsive para móviles */
@media (max-width: 768px) {
  .navigation {
    justify-content: center;
    padding: 0 1rem;
    height: 3.5rem;
  }
  
  .nav-link {
    margin: 0 0.75rem;
    font-size: 0.85rem;
  }
}
</style>