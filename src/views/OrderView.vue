<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue';
import ShopIcon from '../components/icons/ShopIcon.vue'
import SearchIcon from '../components/icons/SearchIcon.vue'
import SettingsIcon from '../components/icons/SettingsIcon.vue'
import DishTypes from '../components/order/DishTypes.vue'
import FoodSelection from '../components/home/FoodSelection.vue';

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
                <ShopIcon/>
            </div>
        </div>
        <div class="mt-5 flex flex-row">
            <div class="absolute">
                <label class="relative top-4 left-3">
                    <SearchIcon/>
                </label>
            </div>
            <input type="text" placeholder="Try our new Beef Bibimbowl..." className="text-xs input h-14 input-bordered input-gray-600 w-full px-10" />
            <div class="absolute right-4">
                <label class="relative top-4 right-3">
                    <SettingsIcon/>
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