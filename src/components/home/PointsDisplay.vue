<script setup lang="ts">
import CrownIcon from '../icons/CrownIcon.vue';
import { IonIcon, } from '@ionic/vue';
import { chevronForward } from "ionicons/icons"

</script>
<template>
    <div class="flex flex-row w-full h-fit items-center">
        <CrownIcon class=" w-12 h-12 mr-2"/>
        <p className=" w-full text-center font-semibold">0 Points</p>
        <ion-icon :icon="chevronForward" class="text-primary"></ion-icon>
    </div>
        
</template>