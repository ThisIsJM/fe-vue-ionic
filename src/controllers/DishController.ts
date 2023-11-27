import type { AddOn } from "@/models/AddOn";
import { addOns, dishes } from "@/utils/constants"


export const getDishes = () => dishes

export const getDishById = (id: number) => dishes.find(dish => dish.id == id)

export const getDishAddOns = (addOnIds: number[]) => addOnIds.map((addOnId) => addOns.find((addon) => addon.id === addOnId)).filter(Boolean) as AddOn[];
