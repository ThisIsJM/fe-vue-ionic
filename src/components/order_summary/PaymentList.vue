<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getPaymentOptions } from '../../controllers/UserController';
import { PaymentOption } from '../../models/Payment';

 const paymentOptions = ref<PaymentOption[]>([])

 onMounted(() => {
    const subscribe = async() => {
        paymentOptions.value = await getPaymentOptions()
    }

    subscribe()
 })
</script>

<template>
    <div v-if="paymentOptions !== undefined" class="form-control gap-y-4">
        <div v-for="option in paymentOptions" className="card card-compact w-full bg-gray-300">
            <div className="card-body">
                <div class="flex flex-row justify-between">
                    <div v-html="option.style"></div>
                    <input type="radio" name="radio-2" className="relative radio radio-secondary radio-xs bg-white border-white checked:border-secondary" />
                </div>
                <p class="text-xs text-gray-400">{{ option.description }}</p>
            </div>
        </div>
    </div>
</template>