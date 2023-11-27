<script setup lang="ts">
import { AddOn } from '../../models/AddOn';
import AddOnsItem from './AddOnsItem.vue';

const props = defineProps<{
    modelValue: {addOn: AddOn, amount: number, totalPrice: number}[]
}>()
</script>

<template>
  <div v-for="(addOn, i) in props.modelValue" :key="addOn.addOn.id">
    <AddOnsItem :addOn="addOn.addOn" :amount="addOn.amount"  v-model="props.modelValue[i]"/>
  </div>
</template>