<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Dish } from '../models/Dish';
import { getDishById } from '../controllers/DishController';
import { ref } from 'vue';

    const route = useRoute()
    const id: number = Number(route.params.id)
    const dish = ref<Dish>(getDishById(id))
</script>
<template>
    <div>
        {{dish.name}}
    </div>
</template>