import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Owner } from 'src/entities/owner';
import { DisplayOwnerOptions } from 'src/options/display-owner-options';

@Component({
  selector: 'app-display-owner',
  templateUrl: './display-owner.component.html',
  styleUrls: ['./display-owner.component.scss']
})
export class DisplayOwnerComponent implements OnInit {

  @Input() owner?:Owner
  @Input() options?:DisplayOwnerOptions
  @Output() ownerRemoved = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    this.ownerRemoved.emit()
  }

  onCopy(e:Event){
    e.preventDefault
    if(this.options?.activeClassCode){
      navigator.clipboard.writeText(this.options.activeClassCode)
    }
  }

}
