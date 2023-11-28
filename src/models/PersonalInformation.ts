import type { Address } from "./Address"

export type PersonalInformation = {
    name: string,
    email: string,
    phoneNo: string,
    profileImage: string
    addresses: Address[]
}