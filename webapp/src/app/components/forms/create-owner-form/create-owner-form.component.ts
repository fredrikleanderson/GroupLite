import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Owner } from 'src/entities/owner';
import { OwnerModel } from 'src/models/owner-model';

@Component({
  selector: 'app-create-owner-form',
  templateUrl: './create-owner-form.component.html',
  styleUrls: ['./create-owner-form.component.scss']
})
export class CreateOwnerFormComponent implements OnInit {

  @Output() ownerAdded = new EventEmitter<Owner>()
  model:OwnerModel = new OwnerModel()
  repeatedEmail:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e:Event):void{
    e.preventDefault()
    this.ownerAdded.emit(this.model)
    this.model = new OwnerModel()
    this.repeatedEmail = ''
  }

}
