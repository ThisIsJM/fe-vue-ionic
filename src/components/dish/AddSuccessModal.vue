<script setup lang="ts">
import router from '../../router';
import ThumbsUpIcon from '../icons/ThumbsUpIcon.vue';

    const props = defineProps<{
        openModal: boolean
    }>()

    const onProceedToCheckout = () => {router.push('/OrderSummary')}
</script>

<template>
    <dialog id="my_modal_1" class="modal px-5" :class="{'modal-open': props.openModal}">
    <div className="modal-box p-10">
        <div class="form-control items-center gap-y-1">
            <ThumbsUpIcon class=" w-20 h-20 min-w-[5rem] min-h-[5rem] mx-auto mb-4"/>
            <p class="font-medium">Successfully Added!</p>
            <p class="text-sm text-gray-400">What do you want to do now?</p>

            <div class="mt-8 text-center form-control gap-y-4">
                <button @click="onProceedToCheckout" class="btn btn-primary rounded-2xl px-8">Proceed to Checkout</button>
                <p class="font-medium text-primary text-sm">Add More</p>
            </div>
        </div>
    </div>
    </dialog>
</template>