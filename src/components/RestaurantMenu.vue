<template>
       <header>
        <h1>Italian Restaurant Menu</h1>
    </header>
    <div class="menu-container">
        <div class="dish">
            <h2>Spaghetti Carbonara</h2>
            <p>Spaghetti with creamy egg and bacon sauce</p>
            <p class="price">$12.99</p>
        </div>
        <div class="dish">
            <h2>Margherita Pizza</h2>
            <p>Tomato sauce, mozzarella, basil</p>
            <p class="price">$10.99</p>
        </div>
        <div class="dish">
            <h2>Lasagna</h2>
            <p>Layered pasta with ricotta and meat sauce</p>
            <p class="price">$14.99</p>
        </div>
        <div class="dish">
            <h2>Chicken Alfredo</h2>
            <p>Grilled chicken with creamy Alfredo sauce</p>
            <p class="price">$15.99</p>
        </div>
        <div class="dish">
            <h2>Ravioli with Marinara</h2>
            <p>Stuffed pasta with tomato sauce</p>
            <p class="price">$11.99</p>
        </div>
        <div class="dish">
            <h2>Caprese Salad</h2>
            <p>Tomato, mozzarella, basil, balsamic glaze</p>
            <p class="price">$8.99</p>
        </div>
        <div class="dish">
            <h2>Vegetable Risotto</h2>
            <p>Creamy rice with mixed vegetables</p>
            <p class="price">$13.99</p>
        </div>
        <div class="dish">
            <h2>Tiramisu</h2>
            <p>Coffee-flavored dessert with mascarpone</p>
            <p class="price">$6.99</p>
        </div>
        <div class="dish">
            <h2>Minestrone Soup</h2>
            <p>Traditional Italian vegetable soup</p>
            <p class="price">$7.99</p>
        </div>
        <div class="dish">
            <h2>Calzone</h2>
            <p>Stuffed pizza turnover with assorted fillings</p>
            <p class="price">$11.99</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
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
            font-size: 36px;
        }
        .menu-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #28464B;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            color: azure;
        }
        .dish {
            margin-bottom: 20px;
        }
        .dish h2 {
            font-size: 24px;
            margin: 0;
        }
        .dish p {
            margin: 0;
            font-size: 16px;
            color: azure;
        }
        .price {
            font-size: 18px;
            font-weight: bold;
            color: #ff5733;
        }
</style>