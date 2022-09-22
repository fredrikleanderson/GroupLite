import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenerateGroupOptions } from 'src/options/generate-group-options';

@Component({
  selector: 'app-generate-groups-form',
  templateUrl: './generate-groups-form.component.html',
  styleUrls: ['./generate-groups-form.component.scss']
})
export class GenerateGroupsFormComponent implements OnInit {

  @Output() generateGroups = new EventEmitter<GenerateGroupOptions>()
  @Input() options?:GenerateGroupOptions

  constructor() { }

  ngOnInit(): void {
  }

  onGenerateGroups(e:Event):void{
    e.preventDefault()
    this.generateGroups.emit(this.options)
  }

}
