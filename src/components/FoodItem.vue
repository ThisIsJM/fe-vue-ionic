<script setup lang="ts">
    import { generateRandomImage } from '../utils/constants';
    import { Dish } from '../models/Dish';
import Ratings from './Ratings.vue';

    defineProps<{dish: Dish}>()
</script>

<template>
    <div class="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img class="w-full h-32" :src="generateRandomImage()" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-sm">{{$props.dish.name}}</h2>
            <p>{{$props.dish.type}}</p>
            <div class="flex flex-row items-baseline w-full">
                <p className="text-primary font-medium"> P {{$props.dish.price}}</p>
                <Ratings :rating="$props.dish.rating"/>
            </div>
        </div>
    </div>
</template>