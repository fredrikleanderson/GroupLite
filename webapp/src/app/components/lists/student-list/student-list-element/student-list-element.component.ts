import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-student-list-element',
  templateUrl: './student-list-element.component.html',
  styleUrls: ['./student-list-element.component.scss']
})
export class StudentListElementComponent implements OnInit {

  @Input() student?:Student

  constructor() { }

  ngOnInit(): void {
  }

}
