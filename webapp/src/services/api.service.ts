import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl:string = 'https://localhost:7242/api/'
  private jsonOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  };

  constructor() { }

  getBaseUrl(){
    return this.baseUrl
  }

  getJsonOptions(){
    return this.jsonOptions
  }
}
