import type { PersonalInformation } from "./PersonalInformation"

export type User = {
    id: number,
    username: string,
    password: string,
    information: PersonalInformation
}