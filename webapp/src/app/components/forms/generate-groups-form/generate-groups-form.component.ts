import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generate-groups-form',
  templateUrl: './generate-groups-form.component.html',
  styleUrls: ['./generate-groups-form.component.scss']
})
export class GenerateGroupsFormComponent implements OnInit {

  @Output() generateGroups = new EventEmitter<number>()
  @Input() numberOfMembers?:number
  maxNumber:number = 2
  model:number = 2
  groupingParameter:string = 'minSize'

  constructor() { }

  ngOnInit(): void {
    this.maxNumber = Math.floor((this.numberOfMembers ?? 4) / 2)
  }

  onSubmit(e:Event):void{
    e.preventDefault()

    switch(this.groupingParameter){
      case 'minSize':
        this.generateGroups.emit(Math.floor((this.numberOfMembers ?? 2) / this.model))
        break;
      case 'maxSize':
        this.generateGroups.emit(Math.ceil((this.numberOfMembers ?? 2) / this.model))
        break;
      case 'number':
        this.generateGroups.emit(this.model)
        break;
      default:
        break;
    }
  }

}
