<script setup lang="ts">
    import {generateRandomImage} from '../../utils/constants'
</script>

<template>
    <div>
        <p className="font-bold">Categories</p>
        <div className="flex flex-row  gap-x-4 mt-2 overflow-hidden">
            <div class=" w-56 min-w-[192px] h-72 shadow-2xl rounded-md relative">
                <img class="rounded-md w-full h-full" :src="generateRandomImage()" alt="Shoes" />
                <div class="absolute inset-0 rounded-md" style="background: linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0));"></div>
            </div>            
        </div>
    </div>
      
</template>