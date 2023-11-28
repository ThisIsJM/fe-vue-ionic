<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Dish } from '../models/Dish';
import { getDishAddOns, getDishById } from '../controllers/DishController';
import { computed, reactive, ref, watch } from 'vue';
import ShopIcon from '../components/icons/ShopIcon.vue';
import Ratings from '../components/Ratings.vue';
import {beverageSize, generateOrderNo} from '../utils/constants'
import { Order, computeAddOnsPrice, computeDishPrice } from '../models/Order';
import { beverages } from '../utils/constants';
import { Beverage } from '../models/Beverage';
import AddOnsSelections from '../components/dish/AddOnsSelections.vue'
import AddSuccessModal from '../components/dish/AddSuccessModal.vue'
import { useOrderStore } from '../stores/OrderStore'
import BackButton from '../components/BackButton.vue';

    const route = useRoute()
    const orderStore = useOrderStore()
    const id: number = Number(route.params.id)

    const dish = ref<Dish>(getDishById(id))
    const addOns = getDishAddOns(dish.value.addOnIds)

    const order = reactive <Order>({
        id: generateOrderNo(),
        item:{ dish: dish.value, amount: 1 },
        beverage: { name: 'Coke', size: 'Regular' },
        addOns: addOns.map((addOn) => ({ addOn, amount: 0, totalPrice: 0 })),
        totalPrice: dish.value.price * 1
    })

    const onAmountAdd = () => {order.item.amount++}
    const onAmountSubtract = () => {order.item.amount > 1 && order.item.amount--}

    const isSelectedSize = computed(() => (size) => size === order.beverage.size);

    watch([() => order.item.amount, () => order.addOns], () => order.totalPrice = computeDishPrice(order.item) + computeAddOnsPrice(order.addOns), {deep:true})

    const openModal = ref<boolean>(false)
    const onAddToBag = () => {
        order.addOns = order.addOns.filter(addOn => addOn.amount > 0);
        orderStore.fill(order)
        openModal.value = !openModal.value
    }

</script>
<template>
    <div class="p-5">
        <div className="flex flex-row items-center">
            <div className="flex-none">
                <BackButton/>
            </div>
            <p className="grow ml-5 text-2xl font-semibold">
                {{dish.type}}
            </p>
            <div className="flex-none">
                <ShopIcon/>
            </div>
        </div>

        <div class="form-control gap-y-5 mt-10 mb-20">
            <div className="w-full shadow-2xl rounded-2xl h-60 min-h-[15rem]">
                <img class="rounded-2xl h-full w-full" :src="dish.imageUrl" alt="Shoes" />
            </div>
            <p class="capitalize font-medium">{{dish.name}}</p>
            <Ratings :rating="dish.rating"/>
            <p class="text-sm leading-5 text-gray-500">{{ dish.description }}</p>
            
            <div class="flex flex-row justify-between w-full">
                <p class="text-2xl font-medium text-primary">P {{ dish.price }}</p>

                <div class="flex flex-row gap-x-5 items-baseline">
                    <button @click="onAmountSubtract" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary text-lg">
                        -
                    </button>
                    <p class=" font-medium">{{ order.item.amount }}</p>
                    <button @click="onAmountAdd" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary text-lg">
                        +
                    </button>
                </div>
            </div>

            <div class="form-control gap-y-4">
                <p class="text-xl font-medium">Beverage</p>
                <select v-model="order.beverage.name" className="select select-bordered w-full max-w-xs">
                    <option v-for="beverage in beverages">{{ beverage }}</option>
                </select>

                <div class="grid grid-cols-3 gap-x-3 w-full">
                    <button @click="() => {order.beverage.size = size as Beverage['size']}" :class="{'bg-base-100 text-black border-gray-300': !isSelectedSize(size)}" class="btn btn-secondary px-5 rounded-2xl " v-for="size in beverageSize">{{ size }}</button>
                </div>
            </div>

            <div class="form-control gap-y-4">
                <p class="text-xl font-medium">Add-Ons</p>
                <AddOnsSelections v-model="order.addOns"/>
            </div>
        </div>
        <div class="fixed inset-x-0 bottom-5 px-5 w-full block">
            <button @click="onAddToBag" class="btn btn-primary w-full">Add to Bag</button>
        </div>
    </div>
    <AddSuccessModal :open-modal="openModal"/>
</template>