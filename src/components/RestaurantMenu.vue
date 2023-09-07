<template>
    
       <header>
        <h1>La Italia Menu</h1>
    </header>
    <div class="menu">
    <div class="menu-container">
        <div class="dish">
            <h2>Spaghetti Carbonara</h2>
            <p>Spaghetti with creamy egg and bacon sauce</p>
            <p class="price">129 kr</p>
        </div>
        <div class="dish">
            <h2>Margherita Pizza</h2>
            <p>Tomato sauce, mozzarella, basil</p>
            <p class="price">110 kr</p>
        </div>
        <div class="dish">
            <h2>Lasagna</h2>
            <p>Layered pasta with ricotta and meat sauce</p>
            <p class="price">149 kr</p>
        </div>
        <div class="dish">
            <h2>Chicken Alfredo</h2>
            <p>Grilled chicken with creamy Alfredo sauce</p>
            <p class="price">159 kr</p>
        </div>
    </div>
    <div class="column">
        <div class="dish">
            <h2>Ravioli with Marinara</h2>
            <p>Stuffed pasta with tomato sauce</p>
            <p class="price">119 kr</p>
        </div>
        <div class="dish">
            <h2>Caprese Salad</h2>
            <p>Tomato, mozzarella, basil, balsamic glaze</p>
            <p class="price">89 kr</p>
        </div>
        <div class="dish">
            <h2>Vegetable Risotto</h2>
            <p>Creamy rice with mixed vegetables</p>
            <p class="price">139 kr</p>
        </div>
        <div class="dish">
            <h2>Tiramisu</h2>
            <p>Coffee-flavored dessert with mascarpone</p>
            <p class="price">69 kr</p>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  flex-direction: row;
  align-items: center; 
}

.menu-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #28464B;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: azure;
    height: 500px;
    margin-bottom: 2rem;
        }
.column {
    margin: 0 auto; 
    max-width: 800px;
    padding: 20px;
    background-color: #28464B;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    color: azure;
    height: 500px;
    margin-bottom: 2rem;
}

body {
    font-family: Arial, sans-serif;
    background-color: #326771;
    margin: 0;
    padding: 0;
        }
header {
    background-color: #42d9c8;
    text-align: center;
    padding: 20px;
    color: #28464b;
        }
h1 {
    margin: 0;
    font-family: 'Caveat', cursive;
    font-family: 'Playfair', serif;
    font-style: italic;
    font-size: 3rem;
        }

.dish {
    margin-bottom: 20px;
        }
.dish h2 {
    font-size: 1.3rem;
    margin: 0;
        }
.dish p {
    margin: 0;
    font-size: 1rem;
    color: azure;
        }
.price {
    font-size: 11.5rem;
    font-weight: bold;
        }

</style>