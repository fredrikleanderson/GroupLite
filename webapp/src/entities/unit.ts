import { Member } from "./member"
import { Owner } from "./owner"

export interface Unit {
    id:number
    code:string
    owner:Owner
    members:Member[]
}