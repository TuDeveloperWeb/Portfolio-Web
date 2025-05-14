<script setup lang="ts">
import NavLinks from '../components/navigation/NavLinks.vue';


</script>

<template>
    <div class="app-container">
        <!-- NavLinks -->
        <NavLinks/>
        
        <main>
            <router-view /> 
        </main>

    </div>

</template>

<style lang="scss">



.app-container {
    font-optical-sizing: auto;
    font-family: 'Poppins', sans-serif;
}

body{
    background-color: var(--bg-color);
    color: var(--text-color);
    font-size: 1rem;
}


.barra {
    background-color: #ffc632;
    height: 10px;
    border: none;
    margin: 0;
    padding: 0;
}

.subtitle {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
    padding: 0px;
    font-weight: bold;
    margin-top: 20px;
    color: var(--text-color);
}



</style>