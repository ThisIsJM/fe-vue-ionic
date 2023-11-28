
<script setup lang="ts">
import { ref } from 'vue';
import { PersonalInformation } from '../models/PersonalInformation';
import { useUserStore } from '../stores/UserStore';
import PointsDisplay from './home/PointsDisplay.vue';

    const userStore = useUserStore()
    const userInfo = ref<PersonalInformation>(userStore.personalInformation)

</script>
<template>
    <div class="flex flex-row w-full">
        <img className=" h-20 w-20 rounded-full" :src="userInfo.profileImage" alt="Girl in a jacket" width="20" height="20">
        <div class="flex-none self-center mx-auto">
            <PointsDisplay/>
        </div>
    </div>
    <div class="mt-3 mb-6">
        <p class="text-2xl font-medium">{{ userInfo.name }}</p>
        <p>{{ userInfo.phoneNo }}</p>
    </div>
</template>