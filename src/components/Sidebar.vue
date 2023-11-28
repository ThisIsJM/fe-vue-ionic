<script setup lang="ts">
import SidebarProfile from './SidebarProfile.vue'
import {navRoutes} from '../utils/navConstants'
import router from '../router';
import { IonIcon } from '@ionic/vue';

</script>

<template>
    <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
            <label htmlFor="my-drawer">
                <svg class="h-10 w-10 fill-current text-primary stroke-primary" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
            </label>
        </div> 
        <div className="drawer-side ">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

            <div class="menu p-4 w-80 max-w-[75%] min-h-full bg-base-100 text-base-content">
                <SidebarProfile/>
                <div class="form-control mt-5 gap-y-4">
                    <div v-for="(route, i) in navRoutes" class=" w-full">
                        <div class="flex flex-row gap-x-4 items-center" @click="router.push(route.route ?? '')">
                            <template v-if="route.hasCustomIcon">
                                <component :is="route.icon" class="w-6 h-6 text-gray-300"></component>
                            </template>
                            <template v-else>
                                <ion-icon :icon="route.icon" size="md" class="text-gray-300"></ion-icon>
                            </template>
                            <p class="font-medium ">{{ route.name }}</p>
                            <p v-if="route.notificationCount && route.notificationCount > 0" class="fixed right-0 mx-5 rounded-full bg-secondary px-2 text-secondary-content font-medium">{{ route.notificationCount }}</p>
                        </div>
                        <div v-if="i == Math.floor(navRoutes.length /2) " className="divider my-1 mt-2 text-gray-400"></div>
                    </div>
                    
                </div>
                <button class="btn btn-primary w-40 mt-8">Logout</button>
            </div>
        </div>
    </div>    
</template>