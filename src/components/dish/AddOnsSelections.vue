<script setup lang="ts">
import { AddOn } from '../../models/AddOn';
import AddOnsItem from './AddOnsItem.vue';

const props = defineProps<{
    addOnsItems: {addOn: AddOn, amount: number, totalPrice: number}[],
    modelValue: {addOn: AddOn, amount: number, totalPrice: number}[]
}>()
</script>

<template>
  <div v-for="(addOn, i) in props.modelValue" :key="addOn.addOn.id">
    <AddOnsItem :addOn="addOn.addOn" :amount="addOn.amount"  v-model="props.modelValue[i]"/>
  </div>
  <!-- <AddOnsItem v-for="addOn in props.modelValue" :key="addOn.addOn.id" :addOn="addOn.addOn" :amount="addOn.amount"/> -->
</template>

/**
<!-- <div v-for="(service, i) in services" :key="service.id">
  <ServicesItem v-model="services[i]"></ServicesItem >
</div> -->
*/