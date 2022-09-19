import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/entities/unit';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-load-unit-form',
  templateUrl: './load-unit-form.component.html',
  styleUrls: ['./load-unit-form.component.scss']
})
export class LoadUnitFormComponent implements OnInit {

  @Output() loadUnit = new EventEmitter<string>()
  @Input() message?:string
  @Input() unitCode?:string

  constructor() { }

  onLoadUnit(e:Event):void{
    e.preventDefault
    this.message = 'Laddar...'
    this.loadUnit.emit(this.unitCode)
    this.unitCode = ''
  }

  ngOnInit(): void {
  }

}
