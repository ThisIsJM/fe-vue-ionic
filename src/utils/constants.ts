import type { AddOn } from "@/models/AddOn";
import type { Dish } from "@/models/Dish";
import type { User } from "@/models/User";

export const generateRandomImage= (name: string = `food-${ Math.floor(Math.random() * 100) + 1}`) => `https://source.unsplash.com/random/?${name}` 

export const dishTypeSelections = ['All','Breakfast', 'Chicken', 'Meat', 'Dessert']

export const beverages = ['Coke', 'Sprite', 'Pepsi']

export const beverageSize: string[] = ['Regular', 'Large', 'X-Large']

export const dishes: Dish[] = [
  {
    id: 0,
    addOnIds: [0], // IDs of associated add-ons
    name: "Spaghetti Bolognese",
    imageUrl: generateRandomImage("Spaghetti Bolognese"),
    type: "Pasta",
    price: 12.99,
    rating: 4,
    description: "Delicious pasta dish with Bolognese sauce.",
  },
  {
    id: 1,
    addOnIds: [1], // IDs of associated add-ons
    name: "Grilled Chicken Salad",
    imageUrl: generateRandomImage("Grilled Chicken Salad"),
    type: "Salad",
    price: 9.99,
    rating: 2,
    description: "Healthy salad with grilled chicken and fresh vegetables.",
  },
  {
    id: 2,
    addOnIds: [2], // IDs of associated add-ons
    name: "Margherita Pizza",
    imageUrl: generateRandomImage("Margherita Pizza"),
    type: "Pizza",
    price: 15.99,
    rating: 3,
    description: "Classic Margherita pizza with tomato, mozzarella, and basil.",
  },
];

export const addOns: AddOn[] = [
  {
    id: 0,
    imageUrl: generateRandomImage("Extra Parmesan"),
    name: "Extra Parmesan",
    price: 2.99,
    type: "Cheese", // Add the type property
  },
  {
    id: 1,
    imageUrl: generateRandomImage("Avocado"),
    name: "Avocado",
    price: 1.99,
    type: "Vegetable", // Add the type property
  },
  {
    id: 2,
    imageUrl: generateRandomImage("Extra Mozzarella"),
    name: "Extra Mozzarella",
    price: 1.49,
    type: "Cheese", // Add the type property
  },
];

export const user: User = {
  id: 0,
  username: 'chou.tzu-yu@email.com',
  password: '',
  information: {
    name: 'Chou Tzuyu',
    email: 'chou.tzu-yu@email.com',
    phoneNo: '+63 912 345 6789',
    profileImage: 'https://source.unsplash.com/random/?face',
    addresses: [
      {
        name: 'My Home Address',
        location: 'No. 21 St. Agusting Street, Brgy. De Jose Delgado City 2234 Philippines'
      },
      {
        name: 'Work/Office',
        location: '3rd flr Anyeong Bldf Seareal St. Joaqin City 3456 Philippines'
      }
    ]
  }
}
