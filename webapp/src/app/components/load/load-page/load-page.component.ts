import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {

  message:string = ''
  unitCode:string = ''

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onLoadUnit(unitCode:string):void{
      
    this.unitSvc.getUnit(unitCode).subscribe({
      next: res =>{
        this.message = 'Laddar...'
        this.activeUnitSvc.setActiveUnit(res)
        this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
      },
      error: err =>{
        this.message = err.error
        setTimeout(() => {
          this.message = ''
        }, 3000)
      }
    })
  }

}