<script setup lang="ts">
import { AddOn } from '../../models/AddOn';

    const props = defineProps<{addOn: AddOn, amount: number, modelValue: {
    addOn: AddOn;
    amount: number;
    totalPrice: number;
}}>()

    const onAmountAdd = () => {props.modelValue.amount++}
    const onAmountSubtract = () => {props.modelValue.amount > 0 && props.modelValue.amount--}
</script>

<template>
    <div className="card card-side bg-base-100 shadow-xl flex flex-row">
        <figure><img class="h-full w-24" :src="addOn.imageUrl" :alt="addOn.name"/></figure>
        <div className="card-body p-3 gap-y-5 form-control">
            <div class="form-control">
                <p class="font-medium capitalize text-lg">{{ addOn.name }}</p>
                <p class="text-gray-400 text-xs">{{ addOn.type }}</p>
            </div>
            <div class="flex flex-row">
                <p class="text-lg text-primary font-semibold">P {{ addOn.price }}</p>
                <div class="flex flex-row gap-x-3 items-baseline">
                    <button @click="onAmountSubtract" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary text-lg">
                        -
                    </button>
                    <p class=" font-medium">{{ modelValue.amount }}</p>
                    <button @click="onAmountAdd" class="btn btn-xs h-8 w-8 btn-gray-400 rounded-xl text-primary text-lg">
                        +
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>