import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  students:Student[] = []
  showCreateUnit:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onStudentCreated(student:Student){
    this.students?.push(student)
  }

}
