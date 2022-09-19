import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Member } from 'src/entities/member';
import { Unit } from 'src/entities/unit';
import { UnitModel } from 'src/models/unit-model';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit, OnDestroy {

  model:UnitModel = new UnitModel()
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.model = JSON.parse(JSON.stringify(res))
        this.sortMembers()
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onMemberAdded(member:Member):void{
    this.model.members.push(member)
    this.sortMembers()
  }

  onMemberRemoved(member:Member):void{
    this.model.members = this.model.members.filter(x => x != member)
    this.sortMembers()
  }

  onSaveChanges(e:Event):void{
    e.preventDefault()
    this.unitSvc.putUnit(this.model).subscribe({
      next: res =>{
        this.activeUnitSvc.setActiveUnit(res)
      }
    })
  }

  onReset(e:Event):void{
    e.preventDefault()
    this.ngOnInit()
  }

  private sortMembers():void{
      this.model.members = this.model.members.sort((a, b) => a.firstName.localeCompare(b.firstName)).sort((a, b) => a.lastName.localeCompare(b.lastName))
  }

}
