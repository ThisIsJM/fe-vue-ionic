import { dishes } from "@/utils/constants"


export const getDishes = () => dishes

export const getDishById = (id: number) => dishes.find(dish => dish.id == id) 