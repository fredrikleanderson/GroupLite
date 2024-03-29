import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveUnitService } from 'src/services/active-unit.service';
import { demoUnit } from 'src/miscellaneous/demounit';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(private activeUnitSvc:ActiveUnitService, private router:Router) { }

  ngOnInit(): void {
  }

  onLaunchDemo(e:Event):void{
    e.preventDefault()
    demoUnit.members.map(member => member.isPresent = true)
    this.activeUnitSvc.setActiveUnit(JSON.parse(JSON.stringify(demoUnit)))
    this.router.navigate(['control', {outlets: {secondary: 'overview'}}])
  }

}
