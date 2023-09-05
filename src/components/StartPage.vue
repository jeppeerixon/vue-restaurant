<template>
    <div class="img-wrapper">
        <img :src="pastaFork">
        <div>
            <h1> La Italia</h1>
            <p> Best Italian restaurant in town</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import pastaFork from "../assets/forkwithpasta.jpg"
</script>

<style scoped>
    .img-wrapper {
        display: flex;
        flex-direction: row;
        background-color: transparent;
        justify-content: center;
        align-items: center;

    }
    img {
        max-width: 10rem;
        border-radius: 50%;
    }
    div {
        background-color: #42d9c8;
        margin: 2rem;
        border-radius: 10px;
        
    }
    h1 {
        background-color: #42d9c8;
        color: #28464b;
        padding: 2rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        font-family: 'Caveat', cursive;
        font-family: 'Playfair', serif;
        font-style: italic;
        font-size: 3rem;
    }

    p {
        color: #28464b;
        padding: 2rem;
        font-family: 'Caveat', cursive;
        font-family: 'Playfair', serif;
        font-style: italic;
        font-size: 1.5rem;
    }


</style>