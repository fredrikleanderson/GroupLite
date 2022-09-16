import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/entities/unit';

@Component({
  selector: 'app-unit-overview',
  templateUrl: './unit-overview.component.html',
  styleUrls: ['./unit-overview.component.scss']
})
export class UnitOverviewComponent implements OnInit {

  @Input() unit?:Unit

  constructor() { }

  ngOnInit(): void {
  }

  onCopy(e:Event){
    e.preventDefault
    if(this.unit){
      navigator.clipboard.writeText(this.unit?.code)
    }
  }

}
