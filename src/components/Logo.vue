<script setup lang="ts">
import { computed } from 'vue';
import ReverseLogo from '../assets/reverse-logo.svg';
import Logo from '../assets/logo.svg';

    const props = withDefaults(defineProps<{
        width: number
        height: number
        reverseColor: boolean
    }>(), {width:0, height:0, reverseColor:false})

    const getLogo = computed(() => props.reverseColor ? ReverseLogo : Logo);   // const getLogo = '../assets/logo.svg'
</script>
<template>
    <img :src="getLogo" alt="Logo" :width="props.width" :height="props.height">
</template>