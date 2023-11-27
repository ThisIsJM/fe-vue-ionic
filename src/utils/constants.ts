import type { AddOn } from "@/models/AddOn";
import type { Dish } from "@/models/Dish";

export const generateRandomImage= () => 'https://source.unsplash.com/random/?food-' +  Math.floor(Math.random() * 100) + 1

export const dishTypeSelections = ['All','Breakfast', 'Chicken', 'Meat', 'Dessert']

export const beverages = ['Coke', 'Sprite', 'Pepsi']

export const beverageSize: string[] = ['Regular', 'Large', 'X-Large']

export const dishes: Dish[] = [
  {
    id: 0,
    addOnIds: [0], // IDs of associated add-ons
    name: "Spaghetti Bolognese",
    imageUrl: generateRandomImage(),
    type: "Pasta",
    price: 12.99,
    rating: 4,
    description: "Delicious pasta dish with Bolognese sauce.",
  },
  {
    id: 1,
    addOnIds: [1], // IDs of associated add-ons
    name: "Grilled Chicken Salad",
    imageUrl: generateRandomImage(),
    type: "Salad",
    price: 9.99,
    rating: 2,
    description: "Healthy salad with grilled chicken and fresh vegetables.",
  },
  {
    id: 2,
    addOnIds: [2], // IDs of associated add-ons
    name: "Margherita Pizza",
    imageUrl: generateRandomImage(),
    type: "Pizza",
    price: 15.99,
    rating: 3,
    description: "Classic Margherita pizza with tomato, mozzarella, and basil.",
  },
];

export const addOns: AddOn[] = [
  {
    id: 0,
    imageUrl: generateRandomImage(),
    name: "Extra Parmesan",
    price: 2.99,
  },
  {
    id: 1,
    imageUrl: generateRandomImage(),
    name: "Avocado",
    price: 1.99,
  },
  {
    id: 2,
    imageUrl: generateRandomImage(),
    name: "Extra Mozzarella",
    price: 1.49,
  },
];