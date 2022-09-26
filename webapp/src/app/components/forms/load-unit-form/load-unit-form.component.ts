import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  onSubmit(e:Event):void{
    e.preventDefault
    this.message = 'Laddar...'
    this.loadUnit.emit(this.unitCode)
    this.unitCode = ''
  }

  ngOnInit(): void {
  }

}
