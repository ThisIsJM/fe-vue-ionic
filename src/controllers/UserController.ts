import type { User } from "@/models/User";
import { paymentOptions } from "@/utils/constants";


export const loginUser = async(user: {username: string, password: string}) => {

    //LOGS IN USER FROM THE DATABASE
    console.log(user.username + ", " + user.password)
}

export const getPaymentOptions = async() => {
    return paymentOptions
}