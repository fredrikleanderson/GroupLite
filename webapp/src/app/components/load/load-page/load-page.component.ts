import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from 'src/entities/unit';
import { ActiveUnitService } from 'src/services/active-unit.service';

@Component({
  selector: 'app-load-page',
  templateUrl: './load-page.component.html',
  styleUrls: ['./load-page.component.scss']
})
export class LoadPageComponent implements OnInit {

  constructor(private activeUnitSvc:ActiveUnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onUnitLoaded(unit:Unit){
    this.activeUnitSvc.setActiveUnit(unit)
    this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
  }

}