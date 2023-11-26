<script setup lang="ts">
import Logo from '../Logo.vue';

</script>
<template>
    <div className="flex flex-row pt-5 pr-5 gap-x-3">
        <Logo :width="80" :height="80"/>
        <div className="form-control gap-y-1">
            <p class="text-xs text-gray-500">Anneoyong! Joe</p>
            <h1 className="text-2xl font-bold tracking-wider">What do you want to eat?</h1>
        </div>
    </div>
</template>