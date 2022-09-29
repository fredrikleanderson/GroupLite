import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Unit } from 'src/entities/unit';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-delete-unit-form',
  templateUrl: './delete-unit-form.component.html',
  styleUrls: ['./delete-unit-form.component.scss']
})
export class DeleteUnitFormComponent implements OnInit {

  @Output() unitDeleted = new EventEmitter<any>()
  @Input() unitCode?:string
  showConfirmation:boolean = false
  unitCodeConfirmation:string = ''

  constructor(private unitSvc:UnitService) { }

  ngOnInit(): void {
  }

  onSubmit(e:Event){
    e.preventDefault
    this.unitSvc.deleteUnit(this.unitCodeConfirmation).subscribe({
      next: res => {
        this.unitDeleted.emit()
      }
    })
  }

  toggleConfirmation():void{
    this.showConfirmation = !this.showConfirmation
  }

}
