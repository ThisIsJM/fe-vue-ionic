<script setup lang="ts">
    import { Dish } from '../../models/Dish';
    import FoodItem from '../FoodItem.vue';

    const dishes: Dish[] = [
        { name: "Spaghetti Bolognese", type: "Pasta", price: 12.99, rating: 4 },
        { name: "Grilled Chicken Salad", type: "Salad", price: 9.99, rating: 2 },
        { name: "Margherita Pizza", type: "Pizza", price: 15.99, rating: 3 },
    ];
</script>

<template>
  <div class="grid grid-cols-2 gap-5">
    <div v-for="dish in dishes" :key="dish.name">
      <FoodItem :dish="dish"/>
    </div>
  </div>
</template>