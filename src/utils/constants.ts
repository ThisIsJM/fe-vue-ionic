import type { AddOn } from "@/models/AddOn";
import type { Dish } from "@/models/Dish";
import type { PaymentOption as PaymentOption } from "@/models/Payment";
import type { Reward } from "@/models/Reward";
import type { User } from "@/models/User";

export const generateRandomImage= (name: string = `food-${ Math.floor(Math.random() * 100) + 1}`) => `https://source.unsplash.com/random/?${name}` 

export const generateOrderNo = () => Math.floor(10000000 + Math.random() * 90000000);

export const dishTypeSelections = ['All','Breakfast', 'Chicken', 'Meat', 'Dessert']

export const beverages = ['Coke', 'Sprite', 'Pepsi']

export const beverageSize: string[] = ['Regular', 'Large', 'X-Large']

export const deliveryCharge: number = 59

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

export const paymentOptions : PaymentOption[] = [
  {
    name: 'Cash on Delivery',
    style: '<p class="text-black font-medium">Cash on Delivery</p>',
    description: 'Pay when you recieved the orer'
  },
  {
    name: 'Loyalty Points',
    style: '<p class="text-black font-medium">Loyalty Points <span class="text-primary font-semibold"> (0 points)</span></p>',
    description: 'Pay using your earned loyality points'
  },
  {
    name: 'Paypal',
    style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 338.667 89.785" xmlns:v="https://vecta.io/nano" class="w-20 h-5"><g transform="translate(936.898 -21.779)"><path clip-path="none" d="M-828.604 39.734c-.697 0-1.289.506-1.398 1.195l-8.068 51.165a1.31 1.31 0 0 0 1.294 1.513h9.568c.696 0 1.289-.507 1.398-1.195l2.37-15.025c.108-.688.701-1.195 1.398-1.195h8.699c10.164 0 18.792-7.416 20.368-17.465 1.589-10.134-6.328-18.971-17.549-18.993zm9.301 11.422h6.96c5.73 0 7.596 3.381 7.006 7.12-.59 3.747-3.488 6.507-9.031 6.507h-7.084zm45.788 3.478c-2.416.009-5.196.504-8.317 1.804-7.159 2.984-10.597 9.151-12.057 13.647 0 0-4.647 13.717 5.852 21.253 0 0 9.737 7.255 20.698-.447l-.189 1.203a1.31 1.31 0 0 0 1.292 1.513h9.083c.697 0 1.289-.507 1.398-1.195l5.525-35.038a1.31 1.31 0 0 0-1.292-1.515h-9.083c-.697 0-1.29.507-1.398 1.195l-.297 1.886s-3.967-4.333-11.216-4.306zm.297 11.067c1.043 0 1.997.144 2.853.419 3.919 1.258 6.141 5.023 5.498 9.104-.793 5.025-4.914 8.725-10.199 8.725-1.042 0-1.996-.143-2.853-.418-3.918-1.258-6.154-5.023-5.511-9.104.793-5.025 4.927-8.727 10.212-8.727z" fill="#003087"/><path clip-path="none" d="M-697.804 39.734c-.697 0-1.289.506-1.398 1.195l-8.068 51.165a1.31 1.31 0 0 0 1.294 1.513h9.568c.696 0 1.289-.507 1.398-1.195l2.37-15.025c.108-.688.701-1.195 1.398-1.195h8.699c10.164 0 18.791-7.416 20.366-17.465 1.59-10.134-6.326-18.971-17.547-18.993zm9.301 11.422h6.96c5.73 0 7.596 3.381 7.006 7.12-.59 3.747-3.487 6.507-9.031 6.507h-7.084zm45.787 3.478c-2.416.009-5.196.504-8.317 1.804-7.159 2.984-10.597 9.151-12.057 13.647 0 0-4.645 13.717 5.854 21.253 0 0 9.735 7.255 20.697-.447l-.189 1.203a1.31 1.31 0 0 0 1.294 1.513h9.082c.697 0 1.289-.507 1.398-1.195l5.527-35.038a1.31 1.31 0 0 0-1.294-1.515h-9.083c-.697 0-1.29.507-1.398 1.195l-.297 1.886s-3.967-4.333-11.216-4.306zm.297 11.067c1.043 0 1.997.144 2.853.419 3.919 1.258 6.141 5.023 5.498 9.104-.793 5.025-4.914 8.725-10.199 8.725-1.042 0-1.996-.143-2.853-.418-3.918-1.258-6.154-5.023-5.511-9.104.793-5.025 4.927-8.727 10.212-8.727z" fill="#0070e0"/><path clip-path="none" d="M-745.92 55.859c-.72 0-1.232.703-1.012 1.388l9.958 30.901-9.004 14.562c-.437.707.071 1.62.902 1.62h10.642a1.77 1.77 0 0 0 1.513-.854l27.811-46.007c.427-.707-.083-1.611-.909-1.611h-10.641a1.77 1.77 0 0 0-1.522.869l-10.947 18.482-5.557-18.345c-.181-.597-.732-1.006-1.355-1.006z" fill="#003087"/><path clip-path="none" d="M-609.107 39.734c-.696 0-1.289.507-1.398 1.195l-8.07 51.163a1.31 1.31 0 0 0 1.294 1.515h9.568c.696 0 1.289-.507 1.398-1.195l8.068-51.165a1.31 1.31 0 0 0-1.292-1.513z" fill="#0070e0"/><path clip-path="none" d="M-908.37 39.734a2.59 2.59 0 0 0-2.556 2.185l-4.247 26.936c.198-1.258 1.282-2.185 2.556-2.185h12.445c12.525 0 23.153-9.137 25.095-21.519a20.76 20.76 0 0 0 .245-2.793c-3.183-1.669-6.922-2.624-11.019-2.624z" fill="#001c64"/><path clip-path="none" d="M-874.832 42.359a20.76 20.76 0 0 1-.245 2.793c-1.942 12.382-12.571 21.519-25.095 21.519h-12.445c-1.273 0-2.358.926-2.556 2.185l-3.905 24.752-2.446 15.528a2.1 2.1 0 0 0 2.075 2.43h13.508a2.59 2.59 0 0 0 2.556-2.185l3.558-22.567a2.59 2.59 0 0 1 2.558-2.185h7.953c12.525 0 23.153-9.137 25.095-21.519 1.379-8.788-3.047-16.784-10.611-20.75z" fill="#0070e0"/><path clip-path="none" d="M-923.716 21.779c-1.273 0-2.358.926-2.556 2.183l-10.6 67.216c-.201 1.276.785 2.43 2.077 2.43h15.719l3.903-24.752 4.247-26.936a2.59 2.59 0 0 1 2.556-2.185h22.519c4.098 0 7.836.956 11.019 2.624.218-11.273-9.084-20.58-21.873-20.58z" fill="#003087"/></g></svg>',
    description: 'A new tab will open to access your account'
  },
  {
    name: 'Paynamics',
    style: '<img src="https://www.paynamics.com/logos/paynamics_rgb.png" class=" w-20 h-6">',
    description: 'Choose paynamics services available from you'
  }
]

export const rewards: Reward[] = [
  { id: 1, dishId: 1, type: 'Beginner', points: 10 },
  { id: 2, dishId: 2, type: 'Intermediate', points: 20 },
  { id: 3, dishId: 3, type: 'Loyal', points: 30 },
  // Add more rewards as needed
];