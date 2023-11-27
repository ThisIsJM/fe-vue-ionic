<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Dish } from '../models/Dish';
import { getDishById } from '../controllers/DishController';
import { ref } from 'vue';
import LeftArrowIcon from '../components/icons/LeftArrowIcon.vue';
import ShopIcon from '../components/icons/ShopIcon.vue';
import Ratings from '../components/Ratings.vue';
import {beverages} from '../utils/constants'

    const route = useRoute()
    const id: number = Number(route.params.id)

    const dish = ref<Dish>(getDishById(id))
    const amount = ref<number>(1)

    const onAmountAdd = () => {amount.value++}
    const onAmountSubtract = () => {amount.value > 0 && amount.value--}
</script>
<template>
    <div class="p-5">
        <div className="flex flex-row items-center">
            <div className="flex-none">
                <button class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-gray-600">
                    <LeftArrowIcon/>
                </button>
            </div>
            <p className="grow ml-5 text-2xl font-semibold">
                {{dish.type}}
            </p>
            <div className="flex-none">
                <ShopIcon/>
            </div>
        </div>

        <div class="form-control gap-y-5 mt-10">
            <div className="w-full shadow-2xl rounded-2xl h-60 min-h-[15rem]">
                <img class="rounded-2xl h-full w-full" :src="dish.imageUrl" alt="Shoes" />
            </div>
            <p class="capitalize font-medium">{{dish.name}}</p>
            <Ratings :rating="dish.rating"/>
            <p class="text-sm leading-5 text-gray-500">{{ dish.description }}</p>
            
            <div class="flex flex-row justify-between w-full">
                <p class="text-2xl font-medium text-primary">P {{ dish.price }}</p>

                <div class="flex flex-row gap-x-5 items-baseline">
                    <button @click="onAmountSubtract" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary">
                        <LeftArrowIcon/>
                    </button>
                    <p class=" font-medium">{{ amount }}</p>
                    <button @click="onAmountAdd" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary">
                        <LeftArrowIcon/>
                    </button>
                </div>
            </div>

            <div class="form-control gap-y-4">
                <p class="text-xl font-medium">Beverages</p>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>

                <div class="grid grid-cols-3 gap-x-3 w-full">
                    <button class="btn btn-secondary px-5 rounded-2xl " v-for="beverage in beverages">{{ beverage }}</button>
                </div>
            </div>

            <div>
                
            </div>

        </div>
    </div>
</template>