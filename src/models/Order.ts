import type { Dish } from "./Dish"

export  type Order={
    items: {dish: Dish, amount: number, totalPrice: number}[],
    beverage: {name: string, size: string},
    addOns: {dish: Dish, ammount: number, totalPrice: number}[],
    grandTotal: number
}

