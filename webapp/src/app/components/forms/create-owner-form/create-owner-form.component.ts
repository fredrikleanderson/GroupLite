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
  message:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e:Event):void{
    e.preventDefault()
    if(this.emailIsValid()){
    this.ownerAdded.emit(this.model)
    this.model = new OwnerModel()
    this.repeatedEmail = ''
    } else {
      this.message = 'Ogiltig emailaddress.'
      this.model.email = ''
      this.repeatedEmail = ''
      setTimeout(() => {
        this.message = ''
      }, 3000)
    }
  }

  private emailIsValid():boolean{
    return new RegExp("^[a-z0-9._-]{1,70}@[a-z]{1,25}\\.[a-z]{2,3}$").test(this.model.email)
  }

}
