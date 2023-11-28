<script setup lang="ts">
import { PersonalInformation } from '../../models/PersonalInformation';

    defineProps<{
        information: PersonalInformation
    }>()
    
</script>

<template>
    <p class="text-black font-semibold">{{ information.name }}</p>
    <div class="mt-2">
            <p>{{ information.phoneNo }}</p>
            <p>{{ information.email }}</p>
    </div>
</template>