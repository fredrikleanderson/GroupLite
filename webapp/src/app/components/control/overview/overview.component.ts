import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  unit?:Unit
  subscription:Subscription = new Subscription

  constructor(private activeUnitSvc:ActiveUnitService) { }

  ngOnInit(): void {
    this.subscription = this.activeUnitSvc.getActiveUnit().subscribe({
      next: res => {
        this.unit = res
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

  onCopy(e:Event){
    e.preventDefault
    if(this.unit){
      navigator.clipboard.writeText(this.unit?.code)
    }
  }

}
