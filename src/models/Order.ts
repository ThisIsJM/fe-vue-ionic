import type { Dish } from "./Dish"

export  type Order={
    item: {dish: Dish, amount: number},
    beverage: {name: string, size: string},
    addOns: {dish: Dish, ammount: number, totalPrice: number}[],
    totalPrice: number
}

