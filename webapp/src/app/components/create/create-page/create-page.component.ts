import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/entities/member';
import { MemberModel } from 'src/models/member-model';
import { UnitModel } from 'src/models/unit-model';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  model:UnitModel = new UnitModel()
  message:string = ''

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreateUnit(unit:UnitModel):void{
    this.unitSvc.postUnit(unit).subscribe({
      next: res =>{
        this.activeUnitSvc.setActiveUnit(res)
        this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
      },
      error: err => {
        console.log(err)
      }
    })
  }

  onMemberAdded(member:MemberModel):void{
    if(this.model){
      this.model.members.push(member)
    }
  }

  onMemberRemoved(member:Member):void{
    if(this.model){
      this.model.members = this.model.members.filter(x => x != member)
    }
  }

}
