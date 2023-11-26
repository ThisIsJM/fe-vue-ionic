<script setup lang="ts">
    import {generateRandomImage} from '../../utils/constants'
</script>

<template>
    <div>
        <div className="flex flex-row justify-between w-full items-baseline">
            <p className="font-bold">Special Offers!</p>
            <p className="text-xs text-primary font-medium">View All</p>
        </div>

        <div className="mt-2">
            <div className="w-full shadow-2xl rounded-2xl">
                <img class="rounded-2xl" :src="generateRandomImage()" alt="Shoes" />
            </div>
        </div>
    </div>  
</template>