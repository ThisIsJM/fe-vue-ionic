<script setup lang="ts">
    import { Dish } from '../models/Dish';
    import Ratings from './Ratings.vue';
    import router from '../router';

    const props = defineProps<{dish: Dish}>()

    const onFoodClick= () => {
        router.push(`/order/dish/${props.dish.id}`)
    }
</script>

<template>
    <div @click="onFoodClick" class="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img class="w-full h-32" :src="dish.imageUrl" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-sm">{{$props.dish.name}}</h2>
            <p>{{$props.dish.type}}</p>
            <div class="items-baseline w-full grid grid-cols-2">
                <p className="text-primary font-medium"> P {{$props.dish.price}}</p>
                <Ratings :rating="$props.dish.rating"/>
            </div>
        </div>
    </div>
</template>