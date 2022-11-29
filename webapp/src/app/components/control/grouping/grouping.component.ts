import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Group } from 'src/entities/group';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { GroupGeneratorService } from 'src/services/group-generator.service';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit, OnDestroy {

  groups?:Group[]
  unit?:Unit
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService, private groupGeneratorSvc:GroupGeneratorService) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.unit = res
        if(this.unit){
          this.unit.members = this.unit.members.filter(member => member.isPresent)
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onGenerateGroups(numberOfGroups:number):void{
    if(this.unit){
      this.groups = this.groupGeneratorSvc.generateGroups(JSON.parse(JSON.stringify(this.unit.members)), numberOfGroups)
    }
  }

}
