<script setup lang="ts">
import { Address } from '../../models/Address';
import AddressItem from './AddressItem.vue';

    const props = defineProps<{ addresses: Address[]}>()

</script>

<template>
    <div class="form-control gap-y-2">
        <div v-for="(address,i) in props.addresses" >
            <AddressItem :address="address"/>
        </div>
    </div>
</template>