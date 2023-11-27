<script setup lang="ts">
import { AddOn } from '../../models/AddOn';
import AddOnsItem from './AddOnsItem.vue';

const props = defineProps<{
    addOnsItems: {addOn: AddOn, amount: number, totalPrice: number}[]
}>()
</script>

<template>
  <AddOnsItem v-for="addOn in props.addOnsItems" :key="addOn.addOn.id" :addOn="addOn.addOn" :amount="addOn.amount" />
</template>
