import { MemberModel } from "./member-model";
import { OwnerModel } from "./owner-model";

export class UnitModel {
    code?:string
    owner?:OwnerModel
    members:MemberModel[] = []
}
