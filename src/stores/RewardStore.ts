import { getDishById } from "@/controllers/DishController"
import { getRewards } from "@/controllers/RewardController"
import type { Reward } from "@/models/Reward"
import { defineStore } from "pinia"

const initialRewards: Reward[] = await getRewards()

export const useRewardStore = defineStore("RewardStore", {
    state: () =>{
        const rewards = initialRewards

        return {
            rewards
        }
    },

    getters:{
        value: (state) => state.rewards,
    },

    actions:{
        getRewardDish(id: number){
            const dishId = this.rewards.find((reward) => reward.id == id)?.id ?? 0
            return getDishById(dishId)
        }
    }
})