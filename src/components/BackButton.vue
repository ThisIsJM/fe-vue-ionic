<script setup lang="ts">
import router from '../router';
import LeftArrowIcon from './icons/LeftArrowIcon.vue';

    const onNavigateBack = () => {router.go(-1)}
</script>

<template>
    <button @click="onNavigateBack" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-gray-600">
        <LeftArrowIcon/>
    </button>
</template>