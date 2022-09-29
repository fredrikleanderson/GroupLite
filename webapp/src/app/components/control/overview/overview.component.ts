import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Member } from 'src/entities/member';
import { UnitModel } from 'src/models/unit-model';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  model:UnitModel = new UnitModel()
  isUnchanged:boolean = false
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService, private router:Router) { }

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

  onCopy(e:Event){
    e.preventDefault
    if(this.model.code){
      navigator.clipboard.writeText(this.model.code)
    }
  }

  onReset(e:Event):void{
    e.preventDefault()
    this.isUnchanged = false
    this.ngOnInit()
  }

  onMemberAdded(member:Member):void{
    this.model.members.push(member)
    this.isUnchanged = true
    this.sortMembers()
  }

  onMemberRemoved(member:Member):void{
    this.model.members = this.model.members.filter(x => x != member)
    this.isUnchanged = true
    this.sortMembers()
  }

  onSaveChanges(e:Event):void{
    e.preventDefault()
    this.unitSvc.putUnit(this.model).subscribe({
      next: res =>{
        this.activeUnitSvc.setActiveUnit(res)
        this.isUnchanged = false
      }
    })
  }

  onUnitDeleted():void{
    this.router.navigate(['../start'])
  }

  private sortMembers():void{
    this.model?.members.sort((a, b) => a.firstName.localeCompare(b.firstName)).sort((a, b) => a.lastName.localeCompare(b.lastName))
}

}
