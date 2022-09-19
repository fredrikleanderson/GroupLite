import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Member } from 'src/entities/member';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit, OnDestroy {

  unit?:Unit
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.unit = res
        this.sortMembers()
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  onMemberAdded(member:Member):void{
    this.unit?.members.push(member)
    this.sortMembers()
  }

  onMemberRemoved(member:Member):void{
    if(this.unit){
      this.unit.members = this.unit.members.filter(x => x != member)
      this.sortMembers()
    }
  }

  private sortMembers():void{
    if(this.unit?.members){
      this.unit.members = this.unit?.members.sort((a, b) => a.firstName.localeCompare(b.firstName)).sort((a, b) => a.lastName.localeCompare(b.lastName))
    }
  }

}
