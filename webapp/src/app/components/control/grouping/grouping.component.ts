import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Group } from 'src/entities/group';
import { Unit } from 'src/entities/unit';
import { GenerateGroupOptions } from 'src/options/generate-group-options';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { GroupGeneratorService } from 'src/services/group-generator.service';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit, OnDestroy {

  options:GenerateGroupOptions = new GenerateGroupOptions()
  groups?:Group[]
  unit?:Unit
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService, private groupGeneratorSvc:GroupGeneratorService) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.unit = res
        if(this.unit){
          this.options.maxNumberOfGroups = Math.floor(this.unit?.members.length / 2) 
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onGenerateGroups(options:GenerateGroupOptions):void{
    if(this.unit){
      this.groups = this.groupGeneratorSvc.generateGroups(JSON.parse(JSON.stringify(this.unit.members)), options.numberOfGroups)
    }
  }

}
