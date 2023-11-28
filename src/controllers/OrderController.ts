import type { Order } from "@/models/Order";

export const sendOrder = async(order: Order) => {
    //ORDER IS SENT HERE 
    console.log("order is sent succesfully" + order)
    return true;
}