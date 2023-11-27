import type { AddOn } from "./AddOn"
import type { Beverage } from "./Beverage"
import type { Dish } from "./Dish"

export  type Order={
    item: {dish: Dish, amount: number},
    beverage: Beverage,
    addOns: {addOn: AddOn, amount: number, totalPrice: number}[],
    totalPrice: number
}

export const computeDishPrice = (item: {dish: Dish, amount: number}) => item.dish.price * item.amount 
