<script setup lang="ts">
import { reactive } from 'vue';
import { Order } from '../models/Order';
import { useOrderStore } from '../stores/OrderStore';

    const orderStore = useOrderStore();
    const order = reactive<Order>(orderStore.value)

</script>

<template>
    <div>
        {{ JSON.stringify(order) }}
    </div>
</template>