<script setup lang="ts">
import PointsDisplay from '../components/home/PointsDisplay.vue';
import Sidebar from '../components/Sidebar.vue';
import MessageHeader from '../components/home/MessageHeader.vue'
import SearchInput from '../components/home/SearchInput.vue'
import SpecialOffers from '../components/home/SpecialOffers.vue'
import Categories from '../components/home/Categories.vue'
import NewItems from '../components/home/NewItems.vue'
import FoodSelection from '../components/home/FoodSelection.vue'
import router from '../router';
import { useUserStore } from '../stores/UserStore';
import { ref } from 'vue';

    const user = useUserStore()
    const imageUrl = ref<string>(user.image)

</script>

<template>
    <div class="px-5 form-control gap-y-2 pb-10">
        <div className="flex flex-row justify-between">
            <div className="flex-none mt-2">
                <Sidebar/>
            </div>
            <div className=" mt-2">
                <PointsDisplay class=" items-start"/>
            </div>
            <div className="flex-none mt-3">
                <img className="h-10 w-10 rounded-full" :src="imageUrl" alt="Girl in a jacket" width="20" height="20">
            </div>
        </div>

        <div class="my-5">
            <MessageHeader/>
        </div>

        <div>
            <SearchInput/>
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
