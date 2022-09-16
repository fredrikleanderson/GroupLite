import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Member } from 'src/entities/member';
import { Unit } from 'src/entities/unit';
import { MemberModel } from 'src/models/member-model';
import { UnitModel } from 'src/models/unit-model';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-create-unit-form',
  templateUrl: './create-unit-form.component.html',
  styleUrls: ['./create-unit-form.component.scss']
})
export class CreateUnitFormComponent implements OnInit {

  @Output() unitCreated = new EventEmitter<Unit>()

  model:UnitModel = new UnitModel
  repetedEmail:string = ""
  message:string = ''

  constructor(private unitSvc:UnitService) { }

  ngOnInit(): void {
  }

  onCreateUnit(e:Event):void{
    e.preventDefault

    this.unitSvc.postUnit(this.model).subscribe({
      next: res =>{
        this.message = 'Sparar...'
        this.unitCreated.emit(res)
      },
      error: err =>{
        console.log(err)
      }
    })
  }

  onMemberAdded(member:MemberModel):void{
    this.model.members.push(member)
  }

  onMemberRemoved(member:Member):void{
    this.model.members = this.model.members.filter(x => x != member)
    console.log(this.model.members)
  }
}
