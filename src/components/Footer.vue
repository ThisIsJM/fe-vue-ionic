<script setup lang="ts">
import { onMounted, ref, } from 'vue';

    const isOpen = ref<boolean>(false)

    onMounted(() => {
        window.addEventListener("keyboardDidShow", () => {  isOpen.value = true; console.log("Keyboard is open")});
        window.addEventListener("keyboardDidHide", () => {  isOpen.value = false; console.log("Keyboard is close")});
    })

</script>

<template>
    <footer class="... sticky bottom-0 z-50" :class="{'hidden': isOpen}">
        <slot/>
    </footer>

</template>