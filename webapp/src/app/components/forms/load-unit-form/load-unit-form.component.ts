import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Unit } from 'src/entities/unit';
import { UnitService } from 'src/services/unit.service';

@Component({
  selector: 'app-load-unit-form',
  templateUrl: './load-unit-form.component.html',
  styleUrls: ['./load-unit-form.component.scss']
})
export class LoadUnitFormComponent implements OnInit {

  @Output() unitLoaded = new EventEmitter<Unit>()

  unitCode:string = ''
  message:string = ''

  constructor(private unitSvc:UnitService) { }

  onLoadUnit(e:Event):void{
    e.preventDefault
    this.unitSvc.getUnit(this.unitCode).subscribe({
      next: res =>{
        this.message = 'Laddar...'
        this.unitLoaded.emit(res)
      },
      error: err =>{
        this.message = err.error
        setTimeout(() => {
          this.unitCode = ''
          this.message = ''
        }, 3000)
      }
    })
  }

  resetForm():void{
    
  }

  ngOnInit(): void {
  }

}
