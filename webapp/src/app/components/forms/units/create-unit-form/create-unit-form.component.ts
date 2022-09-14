import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';
import { CreateUnitModel } from 'src/models/unit/create-unit-model';

@Component({
  selector: 'app-create-unit-form',
  templateUrl: './create-unit-form.component.html',
  styleUrls: ['./create-unit-form.component.scss']
})
export class CreateUnitFormComponent implements OnInit {

  @Input() students?:Student[]
  model: CreateUnitModel = new CreateUnitModel()

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onCreateUnit(e:Event){
    e.preventDefault()
    if(this.students){
      this.model.students = this.students
      console.log(this.model)
    }

  }

}
