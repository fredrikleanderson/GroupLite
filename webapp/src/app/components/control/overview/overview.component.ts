import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Member } from 'src/entities/member';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  model?:Unit
  originalCopy?:Unit
  isChanged:boolean = false
  subscription:Subscription = new Subscription
  loading:boolean = false
  message?:string

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService, private router:Router) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.model = res
        this.originalCopy = JSON.parse(JSON.stringify(res))
        if(this.model){
          this.model.members.map(member => member.isPresent = true)
        }
        this.sortMembers()
      }
    })
  }

  ngOnDestroy(): void {
    if(this.isChanged && this.originalCopy){
      this.activeUnitSvc.setActiveUnit(this.originalCopy)
    }
    this.subscription.unsubscribe()
  }

  onCopy(e:Event){
    e.preventDefault()
    if(this.model?.code){
      navigator.clipboard.writeText(this.model.code)
    }
  }

  onReset(e:Event):void{
    e.preventDefault()
    this.isChanged = false
    this.model = JSON.parse(JSON.stringify(this.originalCopy))
    if(this.model){
      this.activeUnitSvc.setActiveUnit(this.model)
      this.model.members.map(member => member.isPresent = true)
    }
    this.sortMembers()
  }

  onMemberAdded(member:Member):void{
    this.model?.members.push(member)
    this.isChanged = true
    this.sortMembers()
  }

  onMemberRemoved(member:Member):void{
    if(this.model?.members){
      this.model.members = this.model.members.filter(x => x != member)
    }
    this.isChanged = true
    this.sortMembers()
  }

  onSaveChanges(e:Event):void{
    e.preventDefault()
    this.loading = true
    if(this.model?.code === 'demo' && this.model.owner){
      this.activeUnitSvc.setActiveUnit(this.model)
      setTimeout(() => {
        this.isChanged = false
        this.loading = false
        this.message = 'Sparat'
        setTimeout(() => {
          this.message = ''
        }, 2000);
      }, 1000);
    } else {
      if(this.model){
        this.unitSvc.putUnit(this.model).subscribe({
          next: res =>{
            this.activeUnitSvc.setActiveUnit(res)
            this.originalCopy = JSON.parse(JSON.stringify(res))
            this.isChanged = false
            this.loading = false
            this.message = 'Sparat'
            setTimeout(() => {
              this.message = ''
            }, 2000);
          }
        })
      }
    }
  }

  onUnitDeleted(unitCode:string):void{
    if(this.model?.code === 'demo'){
      this.activeUnitSvc.clearActiveUnit()
        this.router.navigate(['../start'])
    } else{
    this.unitSvc.deleteUnit(unitCode).subscribe({
      next: res => {
        this.activeUnitSvc.clearActiveUnit()
        this.router.navigate(['../start'])
      }
    })
    }
  }

  private sortMembers():void{
    this.model?.members.sort((a, b) => a.firstName.localeCompare(b.firstName)).sort((a, b) => a.lastName.localeCompare(b.lastName))
}

}
