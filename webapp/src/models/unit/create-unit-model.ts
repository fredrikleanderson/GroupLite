import { Student } from "src/entities/student"

export class CreateUnitModel {
    teacherEmailAddress:string = ""
    name:string = ""
    students:Student[] = []
}
