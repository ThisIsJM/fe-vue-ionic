<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUserStore } from '../stores/UserStore';
import BackButton from '../components/BackButton.vue';
import UserInformation from '../components/order_summary/UserInformation.vue'
import AddressSelection from '../components/order_summary/AddressSelection.vue';
import { PersonalInformation } from '../models/PersonalInformation';
import CardBody from '../components/CardBody.vue'
import OrderList from '../components/order_summary/OrderList.vue';
import PaymentList from '../components/order_summary/PaymentList.vue';
import { Order } from '../models/Order';
import { useOrderStore } from '../stores/OrderStore';
import { deliveryCharge } from '../utils/constants';
import Footer from '../components/Footer.vue'
import { sendOrder } from '../controllers/OrderController';
import router from '../router';

    const orderStore = useOrderStore()
    const order = reactive<Order>(orderStore.value)

    const userStore = useUserStore();
    const userInfo = reactive<PersonalInformation>(userStore.personalInformation)

    const paymentAmount = ref<number>()
    const onPlaceOrder = () => {
        const success = sendOrder(order)

        if(success) router.push(`/orderSuccess/${order.id}`)
    }

</script>

<template>
    <div class="p-5">
        <div class="flex flex-row gap-x-5 items-end">
            <BackButton/>
            <p class="text-2xl font-medium">Order Summary</p>
        </div>
        <div class="mt-10 form-control gap-y-2" v-if="userInfo !== undefined">
            <CardBody>
                <UserInformation :information="userInfo"/>
            </CardBody>
            <AddressSelection :addresses="userInfo.addresses"/>
        </div>
        <div>
            <p class="text-xl font-medium mt-4">Orders</p>
            <OrderList :order="order"/>
        </div>
        <div>
            <p class="text-xl font-medium mt-4 mb-2">Payment Option</p>
            <PaymentList/>

        </div>

        <div class="mt-5 text-sm font-bold form-control gap-y-1">
            <div class="flex flex-row justify-between w-full">
                <p>Subtotal</p>
                <p>P {{ order.totalPrice  }}</p>
            </div>
            <div class="flex flex-row justify-between w-full">
                <p>Delivery Charge</p>
                <p>P {{ deliveryCharge  }}</p>
            </div>
            <div class=" mt-5">
                <div class="relative">
                    <input :v-model="paymentAmount" type="number" id="floating_outlined" class="input input-base-200 block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-xl border-1 appearance-none dark:border-gray-300 dark:focus:border-gray-500 focus:outline-none focus:ring-0 peer" placeholder="e.g: 1,000" />
                    <label for="floating_outlined" class="absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        Change for
                    </label>
                </div>
            </div>
        </div>
    </div>
    
    <Footer>
        <div class="flex flex-row p-2 justify-between bg-base-100">
            <div class="form-control gap-y-1">
                <p class="text-xs font-medium">Grand Total</p>
                <p class="font-semibold">P {{  (deliveryCharge + order.totalPrice).toFixed(2) }}</p>
            </div>
            <div class="flex-grow pl-10">
                <button @click="onPlaceOrder" class="btn h-full btn-primary rounded-xl mx-auto w-full max-w-sm">Place Order</button>
            </div>
        </div>
    </Footer>
</template>