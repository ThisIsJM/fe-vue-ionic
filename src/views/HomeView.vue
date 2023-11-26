<script setup lang="ts">
import PointsDisplay from '../components/home/PointsDisplay.vue';
import Sidebar from '../components/Sidebar.vue';
import MessageHeader from '../components/home/MessageHeader.vue'
import SearchInput from '../components/home/SearchInput.vue'
import SpecialOffers from '../components/home/SpecialOffers.vue'
import Categories from '../components/home/Categories.vue'
import NewItems from '../components/home/NewItems.vue'
import FoodSelection from '../components/home/FoodSelection.vue'
</script>

<template>
    <div class="px-5 form-control gap-y-2 pb-10">
        <div className="flex flex-row">
            <div className="flex-none mt-2">
                <Sidebar/>
            </div>
            <div className="grow mt-5">
                <PointsDisplay/>
            </div>
            <div className="flex-none mt-3">
                <img className="h-10 w-10 rounded-full" src="https://source.unsplash.com/random/?face" alt="Girl in a jacket" width="20" height="20">
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
    </div>
    
</template>
