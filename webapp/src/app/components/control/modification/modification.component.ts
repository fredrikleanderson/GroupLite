import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

}
