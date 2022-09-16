import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from 'src/entities/member';
import { MemberListOptions } from 'src/options/member-list-options';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Output() memberRemoved = new EventEmitter<Member>()
  @Input() members?:Member[]
  @Input() options?:MemberListOptions

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveMember(e:Event, member:Member):void{
    e.preventDefault
    this.memberRemoved.emit(member)
  }
}
