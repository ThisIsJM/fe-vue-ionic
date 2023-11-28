<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import CrownIcon from '../components/icons/CrownIcon.vue';
import { IonIcon, } from '@ionic/vue';
import { chevronForward} from "ionicons/icons"
import RewardSelection from '../components/loyalty_points/RewardSelection.vue'


</script>

<template>
    <div class="p-5">
        <div className="flex flex-row items-center mb-5">
            <div className="flex-none">
                <Sidebar/>
            </div>
            <p className="grow ml-5 text-2xl font-semibold">
                Our Foods
            </p>
        </div>

        <div class="flex flex-row w-full justify-between">
            <div  class="flex flex-row gap-x-5 items-center">
                <div class="w-10 h-10">
                    <CrownIcon class="w-full h-full"/>
                </div>
                <p class="font-semibold text-sm">Beginner Tier</p>
            </div>
            <div class="flex flex-row items-center gap-x-2 text-primary text-xs font-bold">
                <p>View All</p>
                <ion-icon :icon="chevronForward" size="small" class="text-primary text-xs"></ion-icon>
            </div>
        </div>
        
        <p class="text-xs text-gray-400 leading-5 mt-4">
            Earn points by purchasing from our store. 
            Vestibulum ante ipsum primis in facibus orci luctus et.
        </p>

        <div class="w-full mx-auto text-center my-10">
            <div
                class="radial-progress bg-base-100 shadow-inner text-primary/20"
                :style="{'--value':100, '--size': '10rem'}"
                role="progressbar"
            >
                <p class="text-black font-medium text-2xl">0 / 160</p>
            </div>
        </div>

        <div class="flex flex-row w-full justify-between mb-5">
            <p class="font-semibold">Rewards</p>
            <div class="flex flex-row items-center gap-x-2 text-primary text-xs font-bold">
                <p>How it Works</p>
                <ion-icon :icon="chevronForward" size="small" class="text-primary text-xs"></ion-icon>
            </div>
        </div>
        
        <RewardSelection/>
    </div>
</template>