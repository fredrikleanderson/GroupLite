import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/entities/group';

@Component({
  selector: 'app-group-list-element',
  templateUrl: './group-list-element.component.html',
  styleUrls: ['./group-list-element.component.scss']
})
export class GroupListElementComponent implements OnInit {

  @Input() group?:Group
  @Input() index?:number

  constructor() { }

  ngOnInit(): void {
  }

}
