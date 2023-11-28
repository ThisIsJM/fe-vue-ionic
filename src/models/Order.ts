import type { AddOn } from "./AddOn"
import type { Beverage } from "./Beverage"
import type { Dish } from "./Dish"

export  type Order={
    id: number
    item: {dish: Dish, amount: number},
    beverage: Beverage,
    addOns: {addOn: AddOn, amount: number, totalPrice: number}[],
    totalPrice: number
}

export const computeDishPrice = (item: {dish: Dish, amount: number}) => item.dish.price * item.amount

export const computeAddOnsPrice = (addOns: {addOn: AddOn, amount: number, totalPrice: number}[]) => addOns.reduce((total, { totalPrice }) => total + totalPrice, 0);

