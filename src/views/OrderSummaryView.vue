<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '../stores/UserStore';
import BackButton from '../components/BackButton.vue';
import UserInformation from '../components/order_summary/UserInformation.vue'
import AddressSelection from '../components/order_summary/AddressSelection.vue';
import { PersonalInformation } from '../models/PersonalInformation';

    const userStore = useUserStore();
    const userInfo = reactive<PersonalInformation>(userStore.personalInformation)

</script>

<template>
    <div class="p-5">
        <div class="flex flex-row gap-x-5 items-end">
            <BackButton/>
            <p class="text-2xl font-medium">Order Summary</p>
        </div>
        <div class="mt-10 form-control gap-y-2" v-if="userInfo !== undefined">
            <UserInformation :information="userInfo"/>
            <AddressSelection :addresses="userInfo.addresses"/>
        </div>

    </div>
</template>