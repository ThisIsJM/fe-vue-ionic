<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../components/Logo.vue'
import { User } from '../models/User'
import {loginUser} from '../controllers/UserController'

    const user = ref<User>({id: 0, username:'', password:''})

    const submitHandler = async() => {
        await loginUser(user.value)
    }
</script>

<template>
<div className=" form-control my-10 mx-5 text-gray-500">
    <Logo/>
    <div className="my-10">
        <h1 className=" text-2xl font-bold tracking-wide mb-4 text-gray-900">Bonjour!</h1>
        <p className="text-xs leading-relaxed">Welcome to all new FastFood mobile app. Kindly login your account. Thank you!</p>
    </div>

    <div className = "form-control gap-y-5">
        <div class="relative">
            <input :v-model="user.username" type="text" id="floating_outlined" class="input input-base-200 block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-xl border-1 appearance-none dark:border-gray-300 dark:focus:border-gray-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label for="floating_outlined" class="absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Username
            </label>
        </div>
        <div class="relative">
            <input :v-model="user.password" type="password" id="floating_outlined" className="input input-base-200 block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-xl border-1 appearance-none dark:border-gray-300 dark:focus:border-gray-500 focus:outline-none focus:ring-0 peer" placeholder=" " />
            <label for="floating_outlined" className="absolute text-sm  dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-base-100 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                Password
            </label>
            <p className="absolute bottom-2 right-2 z-10 origin-[0] text-sm font-bold text-primary">Forgot?</p>
        </div>
    </div>
    <div className="form form-control text-center gap-y-5 text-sm my-10">
        <button @click="submitHandler" className="btn h-14 bg-primary btn-primary rounded-2xl capitalize">Login</button>
        <p className="text-primary font-bold">Login as Guest</p>
    </div>

    <p className=" text-center text-sm">Don't have an account yet? <span className="font-bold text-primary">Create</span></p>
</div>
</template>