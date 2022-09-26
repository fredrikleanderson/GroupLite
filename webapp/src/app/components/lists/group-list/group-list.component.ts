import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/entities/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  @Input() groups?:Group[]

  constructor() { }

  ngOnInit(): void {
  }

}
