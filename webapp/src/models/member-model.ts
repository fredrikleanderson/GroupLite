import { Member } from "src/entities/member"

export class MemberModel implements Member {
    id?:number
    firstName:string = ""
    lastName:string = ""
    isPresent:boolean = true
}