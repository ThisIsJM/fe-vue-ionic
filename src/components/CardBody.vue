<script setup lang="ts">
import PencilIcon from './icons/PencilIcon.vue'
import GarbageIcon from './icons/GarbageIcon.vue'
import KebabIcon from './icons/KebabIcon.vue'
import { ref } from 'vue';

    const scrollContainer = ref(null);
    const scrollOffset = ref<number>()

    const onCardScroll = () => {
        scrollOffset.value = scrollContainer.value.scrollLeft;
    }
</script>

<template>
      <div class="flex flex-row overflow-x-scroll gap-x-2 snap-x snap-mandatory" :onScroll="onCardScroll" ref="scrollContainer">
        <div class="flex flex-row w-full min-w-full snap-center">
            <div className="card grow w-[95%] min-w-[95%] bg-gray-300">
                <slot/>
            </div>
            <div class="relative right-1 flex items-center h-full text-secondary" :class="{'hidden': scrollOffset > 0}">
                <KebabIcon class="h-16 w-9" />
            </div>
        </div>
        
        <div>
            <div className="card w-12 h-full bg-orange-400/40 text-primary-content">
                <div className="card-body flex p-0">
                    <PencilIcon class="my-auto mx-auto text-orange-400"/>
                </div>
            </div>
        </div>
        <div>
            <div className="card w-12 h-full bg-primary/40 text-primary-content snap-center">
                <div className="card-body flex p-0">
                    <GarbageIcon class="my-auto mx-auto text-primary"/>
                </div>
            </div>
        </div>
    </div>
    
</template>