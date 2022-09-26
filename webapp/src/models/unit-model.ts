import { MemberModel } from "./member-model";
import { OwnerModel } from "./owner-model";

export class UnitModel {
    owner?:OwnerModel
    members:MemberModel[] = []
}
