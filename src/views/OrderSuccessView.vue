<script setup lang="ts">
import ThumbsUpIcon from '../components/icons/ThumbsUpIcon.vue';
import { useRoute } from 'vue-router';
import router from '../router';

    const route = useRoute()
    const orderNo = route.params.id

    const onBackToHome = () => router.push('/home')

</script>

<template>
    <div class="p-5 form-control items-center text-center h-screen justify-between">
        <div>
            <div class=" w-40 h-40 mt-10 mb-5 flex mx-auto">
                <ThumbsUpIcon class=" w-full h-full flex pl-5"/>
            </div>
            <p class="text-2xl font-semibold mb-5">Order Recieved!</p>
            <p class="text-xs text-gray-400 text-cente mx-1 leading-5">
                Your order <span class="font-semibold text-primary">No. {{ orderNo }}</span> 
                has successfully take and now being processed. 
                Kindly wait for our notification regaarding your order
            </p>
        </div>
        <div class="form-control w-full gap-y-4">
            <button class="btn btn-primary w-full rounded-2xl h-14 "> Track Order </button>
            <p @click='onBackToHome' class="text-sm text-primary font-semibold my-3">Back to home</p>
        </div>
    </div>
</template>