import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from 'src/entities/member';
import { MemberModel } from 'src/models/member-model';
import { UnitModel } from 'src/models/unit-model';

@Component({
  selector: 'app-create-unit-form',
  templateUrl: './create-unit-form.component.html',
  styleUrls: ['./create-unit-form.component.scss']
})
export class CreateUnitFormComponent implements OnInit {

  @Output() createUnit = new EventEmitter<UnitModel>()
  @Input() model?:UnitModel
  @Input() message?:string

  repetedEmail:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUnit(e:Event):void{
    e.preventDefault
    this.createUnit.emit(this.model)
  }

}
