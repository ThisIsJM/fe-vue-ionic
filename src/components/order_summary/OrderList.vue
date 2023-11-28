<script setup lang=ts>
import { Order } from '../../models/Order';
import CardBody from '../CardBody.vue';

    defineProps<{order: Order}>()

    const onAmountAdd = () => {}
    const onAmountSubtract = () => {}

</script>

<template>
    <CardBody v-if="order !== undefined">
        <div class="card-body rounded-xl p-0 text-sm flex flex-row bg-gray-300">
            <figure><img class="h-full w-24 rounded-xl" :src="order.item.dish.imageUrl" :alt="order.item.dish.name"/></figure>
            <div class="p-2">
                <div class="form-control gap-y-5 pt-2 pb-4">
                    <div>
                        <p class="font-medium text-black text-lg mb-2">{{ order.item.dish.name }}</p>
                        <ul>
                            <li class="text-xs text-black" v-for="addOn in order.addOns">{{addOn.amount}}x {{ addOn.addOn.name  }}</li>
                        </ul>
                    </div>
                   
                    <div class="flex flex-row items-baseline gap-x-5">
                        <p class="text-primary font-bold">P {{ order.totalPrice }}</p>
                        <div class="flex flex-row gap-x-3 items-baseline">
                            <button @click="onAmountSubtract" class="btn btn-xs h-8 w-8 btn-gray-400 bg-gray-500/30 border-none rounded-xl text-primary text-lg">
                                -
                            </button>
                            <p class=" font-medium">{{ order.item.amount }}</p>
                            <button @click="onAmountAdd" class="btn btn-xs h-8 w-8 btn-gray-400 bg-gray-500/30 border-none rounded-xl text-primary text-lg">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </CardBody>
</template>