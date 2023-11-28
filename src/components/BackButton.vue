<script setup lang="ts">
import router from '../router';
import { IonIcon, } from '@ionic/vue';
import { chevronBack } from "ionicons/icons"


    const onNavigateBack = () => {router.go(-1)}
</script>

<template>
    <button @click="onNavigateBack" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-gray-600">
        <ion-icon :icon="chevronBack" class="text-gray-500"></ion-icon>

    </button>
</template>