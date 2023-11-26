<script setup lang="ts">
    import {generateRandomImage} from '../../utils/constants'
</script>

<template>
    <div>
        <p className="font-bold">Whats new!</p>
        <div className="mt-2">
            <div className="w-full shadow-2xl rounded-2xl h-48 min-h-[12rem]">
                <img class="rounded-2xl h-full w-full" :src="generateRandomImage()" alt="Shoes" />
            </div>
        </div>
    </div>
      
</template>