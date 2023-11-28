<script setup lang="ts">
import { Address } from '../../models/Address';
import CardBody from '../CardBody.vue';
import AddressItem from './AddressItem.vue';

    const props = defineProps<{ addresses: Address[]}>()

</script>

<template>
    <div class="form-control gap-y-2">
        <div v-for="(address,i) in props.addresses" >
            <CardBody>
                <AddressItem :address="address"/>
            </CardBody>
        </div>
    </div>
</template>