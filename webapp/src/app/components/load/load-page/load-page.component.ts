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
  loading:boolean = false

  constructor(private activeUnitSvc:ActiveUnitService, private unitSvc:UnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onLoadUnit(unitCode:string):void{
    this.loading = true

    this.unitSvc.getUnit(unitCode).subscribe({
      next: res =>{
        this.loading = false
        this.message = 'Laddar...'
        let unit = res
        unit.members.map(member => member.isPresent = true)
        this.activeUnitSvc.setActiveUnit(unit)
        this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
      },
      error: err =>{
        this.loading = false
        if(err.status === 0){
          this.message = 'Kan inte ansluta till servern.'
          setTimeout(() => {
            this.message = ''
          }, 3000)
        } else{
          this.message = err.error
          setTimeout(() => {
            this.message = ''
          }, 3000)
        }
      }
    })
  }

}