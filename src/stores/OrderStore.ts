import type { Order } from "@/models/Order";
import { generateOrderNo } from "@/utils/constants";
import { defineStore } from "pinia";

const initialOrder: Order = {
    id: generateOrderNo(),
    item:{ 
        dish: {
            id: 0,
            addOnIds: [],
            name: '',
            description: '',
            imageUrl: '',
            type: '',
            price: 0,
            rating: 0

        }, 
        amount: 1 
    },
    beverage: { name: 'Coke', size: 'Regular' },
    addOns: [],
    totalPrice: 0
  }


export const useOrderStore = defineStore("OrderStore", {
    state: () =>{
        const order : Order = initialOrder
        
        return {
            order
        }
    },

    getters:{
        value: (state) => state.order
    },

    actions:{
        fill(orders: Order){
            this.order = orders
        },
    }

})