<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { Dish } from '../../models/Dish';
    import FoodItem from '../FoodItem.vue';
    import { getDishes } from '../../controllers/DishController';

    const dishes = ref<Dish[]>([])

    onMounted(() => {
      dishes.value = getDishes()
    })

</script>

<template>
    <div class="grid grid-cols-2 gap-5">
        <div v-for="dish in dishes" :key="dish.name">
            <FoodItem :dish="dish"/>
        </div>
    </div>
</template>