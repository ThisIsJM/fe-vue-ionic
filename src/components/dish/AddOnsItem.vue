<script setup lang="ts">
import { AddOn } from '../../models/AddOn';

    defineProps<{addOn: AddOn, amount: number}>()
</script>

<template>
    <div className="card card-side bg-base-100 shadow-xl">
        <figure><img :src="addOn.imageUrl" :alt="addOn.name"/></figure>
        <div className="card-body">
            <h2 className="card-title"></h2>
            <p>{{ addOn.name }}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
            </div>
        </div>
    </div>
</template>../../models/AddOn