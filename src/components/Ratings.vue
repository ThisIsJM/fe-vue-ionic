<script setup lang="ts">
    const props = defineProps<{ rating: number }>();
    const isRated = (n: number): boolean => n <= props.rating;
</script>

<template>
  <div class="rating rating-xs flex flex-row items-stretch w-full gap-x-1" >
    <input
      v-for="n in 5" :key="n"
      type="radio"
      name="rating-1"
      class="mask mask-star-2 "
      :class="{'bg-primary': isRated(n)}"
    />
  </div>
</template>