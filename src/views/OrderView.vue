<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import ShopIcon from '../components/icons/ShopIcon.vue'
import DishTypes from '../components/order/DishTypes.vue'
import FoodSelection from '../components/home/FoodSelection.vue';
import { IonIcon, } from '@ionic/vue';
import { search, options } from "ionicons/icons"


</script>

<template>
    <div class="p-5">
        <div className="flex flex-row items-center">
            <div className="flex-none">
                <Sidebar/>
            </div>
            <p className="grow ml-5 text-2xl font-semibold">
                Our Foods
            </p>
            <div className="flex-none">
                <ShopIcon class="text-primary w-8 h-8"/>
            </div>
        </div>
        <div class="mt-5 flex flex-row">
            <div class="absolute">
                <label class="relative top-4 left-3">
                    <ion-icon :icon="search" size="md" class="text-primary"></ion-icon>
                </label>
            </div>
            <input type="text" placeholder="Try our new Beef Bibimbowl..." className="text-xs input h-14 input-bordered input-gray-600 w-full px-10" />
            <div class="absolute right-4">
                <label class="relative top-4 right-3">
                    <ion-icon :icon="options" size="md" class="text-primary"></ion-icon>
                </label>
            </div>
        </div>
        <div class="w-full mt-4">
            <DishTypes/>
        </div>

        <div class="mt-5">
            <FoodSelection/>
        </div>
    </div>
</template>