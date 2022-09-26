import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/entities/owner';

@Component({
  selector: 'app-display-owner',
  templateUrl: './display-owner.component.html',
  styleUrls: ['./display-owner.component.scss']
})
export class DisplayOwnerComponent implements OnInit {

  @Input() owner?:Owner

  constructor() { }

  ngOnInit(): void {
  }

}
