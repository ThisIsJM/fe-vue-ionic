<script setup lang="ts">
    import FoodItem from '../FoodItem.vue';
    import {dishes} from '../../utils/constants'


</script>

<template>
  <div class="grid grid-cols-2 gap-5">
    <div v-for="dish in dishes" :key="dish.name">
      <FoodItem :dish="dish"/>
    </div>
  </div>
</template>