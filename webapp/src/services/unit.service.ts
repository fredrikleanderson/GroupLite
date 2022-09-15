import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Unit } from 'src/entities/unit';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private endpoint:string = 'Units/'

  constructor(private apiSvc:ApiService, private http:HttpClient) { }

  getUnit(unitCode:string): Observable<Unit>{
    return this.http.get<Unit>(this.apiSvc.getBaseUrl() + this.endpoint + unitCode, this.apiSvc.getJsonOptions())
  }

}