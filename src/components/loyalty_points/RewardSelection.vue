<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRewardStore } from '../../stores/RewardStore'
import RewardItem from './RewardItem.vue';
import { Reward } from '../../models/Reward';

    const rewardStore = useRewardStore()
    const rewards = reactive<Reward[]>(rewardStore.value)

    const rewardTypes: string[] = ['All', 'Beginner', 'Intermediate', 'Loyal']
    const selectedType = ref<string>('All')

    const onTypeSelect = (type: string) => selectedType.value = type
    const isSelected = (type: string) =>  computed(() => type == selectedType.value).value

</script>
<template>
    <div class="flex flex-row gap-x-2 overflow-scroll my-3">
        <button 
            v-for="rewardType in rewardTypes"
            class="btn btn-primary rounded-2xl max-w-xs text-xs"
            :class="{'btn bg-gray-200 border-gray-200 text-gray-400': !isSelected(rewardType)}"
            @click="() => {onTypeSelect(rewardType)}" 
        >
            {{rewardType}}
        </button>
    </div>
    <div v-if="rewards !== undefined" class="form-control gap-y-4">
        <div v-for="reward in rewards" className="card card-compact w-full bg-gray-300">
            <RewardItem :reward="reward" :key="reward.id"/>
        </div>
    </div>
</template>