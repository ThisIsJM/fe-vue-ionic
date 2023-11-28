import { user } from "@/utils/constants"
import { defineStore } from "pinia"

export const useUserStore = defineStore("UserStore", {
    state: () =>{        
        return {
            user
        }
    },

    getters:{
        value: (state) => state,
        personalInformation: (state) => state.user.information
    },

    actions:{

    }
})