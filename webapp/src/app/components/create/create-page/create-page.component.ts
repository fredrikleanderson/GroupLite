import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  constructor(private activeUnitSvc:ActiveUnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onUnitCreated(unit:Unit):void{
    this.activeUnitSvc.setActiveUnit(unit)
    this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
  }

}
