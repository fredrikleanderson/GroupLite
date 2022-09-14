import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/entities/student';
import { CreateStudentModel } from 'src/models/student/create-student-model';

@Component({
  selector: 'app-create-student-form',
  templateUrl: './create-student-form.component.html',
  styleUrls: ['./create-student-form.component.scss']
})
export class CreateStudentFormComponent implements OnInit {

  model:CreateStudentModel = new CreateStudentModel()
  @Output() studentCreated = new EventEmitter<Student>()

  constructor() { }

  ngOnInit(): void {
  }

  onCreateStudent(e:Event){
    e.preventDefault()
    if(this.model.name && this.model.sex){
      this.studentCreated.emit({name:this.model.name, sex:this.model.sex})
      this.model = new CreateStudentModel()
    }
  }
}
