import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';

@Component({
  selector: 'app-deletion',
  templateUrl: './deletion.component.html',
  styleUrls: ['./deletion.component.scss']
})
export class DeletionComponent implements OnInit, OnDestroy {

  unit?:Unit
  subscription:Subscription = new Subscription
  showConfirmation:boolean = false

  constructor(private activeUnitSvc:ActiveUnitService, private router:Router) { }

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

  onUnitDeleted():void{
    this.router.navigate(['../start'])
  }

}
