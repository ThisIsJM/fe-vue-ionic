<script setup lang="ts">
    import Logo from '../components/icons/Logo.vue'
    import router from '../router/index'
</script>

<template>
    <div @click="router.push('/login')" className ="flex items-center justify-center h-screen m-0 bg-primary">
        <Logo :width="200" :height="200" :reverseColor="true"/>
    </div>
</template>