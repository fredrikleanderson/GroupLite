import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/entities/unit';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-delete-unit-form',
  templateUrl: './delete-unit-form.component.html',
  styleUrls: ['./delete-unit-form.component.scss']
})
export class DeleteUnitFormComponent implements OnInit {

  @Output() unitDeleted = new EventEmitter<string>()
  @Input() unitCode?:string
  showConfirmation:boolean = false
  unitCodeConfirmation:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e:Event){
    e.preventDefault
    this.unitDeleted.emit(this.unitCodeConfirmation)
  }

  toggleConfirmation():void{
    this.showConfirmation = !this.showConfirmation
  }

}
