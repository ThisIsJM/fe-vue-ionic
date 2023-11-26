<script setup lang="ts">
    const props = defineProps<{ rating: number }>();
    const isRated = (n: number): boolean => n <= props.rating;
</script>

<template>
  <div class="rating rating-xs" v-for="n in 5" :key="n">
    <input
      type="radio"
      name="rating-1"
      class="mask mask-star-2 "
      :class="{'bg-primary': isRated(n)}"
    />
  </div>
</template>