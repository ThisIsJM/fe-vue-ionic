<script setup lang="ts">
import { IonIcon, } from '@ionic/vue';
import { pencil, ellipsisVertical, trash } from "ionicons/icons"
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
                <ion-icon :icon="ellipsisVertical" size="md" class="text-secondary"></ion-icon>
            </div>
        </div>
        
        <div>
            <div className="card w-12 h-full bg-orange-400/40 text-primary-content">
                <div className="card-body flex p-0">
                    <ion-icon :icon="pencil" size="md" class="my-auto mx-auto text-orange-400"></ion-icon>

                </div>
            </div>
        </div>
        <div>
            <div className="card w-12 h-full bg-primary/40 text-primary-content snap-center">
                <div className="card-body flex p-0">
                    <ion-icon :icon="trash" size="md" class="my-auto mx-auto text-primary"></ion-icon>
                </div>
            </div>
        </div>
    </div>
    
</template>