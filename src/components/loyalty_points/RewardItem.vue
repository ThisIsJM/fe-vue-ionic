<script setup lang="ts">
import {Reward} from '../../models/Reward'
import {Dish} from '../../models/Dish'
import CrownIcon from '../icons/CrownIcon.vue'
import { useRewardStore } from '../../stores/RewardStore';

    const rewardStore = useRewardStore()

    const props = defineProps<{reward: Reward}>()
    const dish: Dish = rewardStore.getRewardDish(props.reward.id)

</script>
<template>
    <div v-if="dish !== undefined" className="card card-side max-h-24 bg-gray-300 shadow-xl">
        <figure><img class="h-full w-24" :src="dish.imageUrl" :alt="dish.name"/></figure>
        <div className="card-body form-control justify-between">
            <div>
                <h2 className="font-medium ">{{ dish.name }}</h2>
                <p>{{ dish.type }}</p>
            </div>
            <div class='flex flex-row items-center'>
                <div class="w-6 h-6 mr-6">
                    <CrownIcon class="w-full h-full"/>
                </div>
                <p class="text-primary font-semibold">{{ reward.points }} points</p>
            </div>

        </div>
    </div>
      
</template>