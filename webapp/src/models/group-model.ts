import { Group } from "src/entities/group";
import { Member } from "src/entities/member";

export class GroupModel implements Group {
    members:Member[] = []
}