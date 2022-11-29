import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/entities/member';

@Component({
  selector: 'app-member-list-element',
  templateUrl: './member-list-element.component.html',
  styleUrls: ['./member-list-element.component.scss']
})
export class MemberListElementComponent implements OnInit {

  @Input() member?:Member
  @Input() index?:number
  @Input() showIsPresent?:boolean

  constructor() { }

  ngOnInit(): void {
  }
}
