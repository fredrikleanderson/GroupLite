import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MemberModel } from 'src/models/member-model';

@Component({
  selector: 'app-create-member-form',
  templateUrl: './create-member-form.component.html',
  styleUrls: ['./create-member-form.component.scss']
})
export class CreateMemberFormComponent implements OnInit {

  @Output() memberAdded = new EventEmitter<MemberModel>()
  model:MemberModel = new MemberModel

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e:Event):void{
    e.preventDefault
    this.memberAdded.emit(this.model)
    this.model = new MemberModel
  }

}
