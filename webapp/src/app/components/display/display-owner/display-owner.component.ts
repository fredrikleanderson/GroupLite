import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Owner } from 'src/entities/owner';

@Component({
  selector: 'app-display-owner',
  templateUrl: './display-owner.component.html',
  styleUrls: ['./display-owner.component.scss']
})
export class DisplayOwnerComponent implements OnInit {

  @Input() owner?:Owner
  @Output() ownerRemoved = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.ownerRemoved.emit()
  }

}
