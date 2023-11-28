<script setup lang="ts">
import PointsDisplay from '../components/home/PointsDisplay.vue';
import Sidebar from '../components/Sidebar.vue';
import MessageHeader from '../components/home/MessageHeader.vue'
import SpecialOffers from '../components/home/SpecialOffers.vue'
import Categories from '../components/home/Categories.vue'
import NewItems from '../components/home/NewItems.vue'
import FoodSelection from '../components/home/FoodSelection.vue'
import router from '../router';
import { useUserStore } from '../stores/UserStore';
import { ref } from 'vue';
import { IonIcon, } from '@ionic/vue';
import { search } from "ionicons/icons"

    const user = useUserStore()
    const imageUrl = ref<string>(user.image)

</script>

<template>
    <div class="px-5 pt-3 form-control gap-y-2 pb-10">
        <div className="flex flex-row justify-between">
            <div className="flex-none mt-2">
                <Sidebar/>
            </div>
            <div className=" mt-4">
                <PointsDisplay class=" items-start"/>
            </div>
            <div className="flex-none mt-3">
                <img className="h-10 w-10 rounded-full" :src="imageUrl" alt="Profile Picture" width="20" height="20">
            </div>
        </div>

        <div class="my-5">
            <MessageHeader/>
        </div>

        <div>
            <div class=" flex flex-row mb-4">
                <div class="absolute">
                    <label class="relative top-3 left-3">
                        <ion-icon :icon="search" size="md" class="text-primary"></ion-icon>
                    </label>
                </div>
                <input type="text" placeholder="Try our new Steak Fries Veggies..." className="text-xs input input-bordered input-gray-600 w-full px-10" />
            </div>
        </div>

        <div className="form-control gap-y-10">
            <SpecialOffers/>
            <Categories/>
            <NewItems/>
            <div>
                <p className="font-bold">Most Popular</p>
                <FoodSelection/>
            </div>
        </div>

        <button @click="router.push('/order')" class="btn btn-primary font-bold rounded-2xl h-fit w-fit p-5 px-10 m-5 fixed bottom-0 right-0">
            Order Now!
        </button>
    </div>
    
</template>
