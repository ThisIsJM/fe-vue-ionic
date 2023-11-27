<script setup lang="ts">
import { reactive } from 'vue';
import { Order } from '../models/Order';
import { useOrderStore } from '../stores/OrderStore';
import BackButton from '../components/BackButton.vue';

    const orderStore = useOrderStore();
    const order = reactive<Order>(orderStore.value)

</script>

<template>
    <div class="p-5">
        <div>
            <BackButton/>
        </div>
    </div>
</template>