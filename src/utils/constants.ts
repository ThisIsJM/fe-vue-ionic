import type { Dish } from "@/models/Dish";

export const generateRandomImage= () => 'https://source.unsplash.com/random/?food-' +  Math.floor(Math.random() * 100) + 1

export const dishTypeSelections = ['All','Breakfast', 'Chicken', 'Meat', 'Dessert']

export const dishes: Dish[] = [
    {id: 0, name: "Spaghetti Bolognese", type: "Pasta", price: 12.99, rating: 4 },
    {id: 1, name: "Grilled Chicken Salad", type: "Salad", price: 9.99, rating: 2 },
    {id: 2, name: "Margherita Pizza", type: "Pizza", price: 15.99, rating: 3 },
];