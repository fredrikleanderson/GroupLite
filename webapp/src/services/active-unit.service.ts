import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Unsubscribable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Unit } from 'src/entities/unit';

@Injectable({
  providedIn: 'root'
})
export class ActiveUnitService {

  private activeUnit = new BehaviorSubject<Unit|undefined>(undefined)

  getActiveUnit():Observable<Unit|undefined>{
    return this.activeUnit.asObservable()
  }

  setActiveUnit(unit:Unit):void{
    this.activeUnit.next(unit)
  }

  clearActiveUnit():void{
    this.activeUnit.complete()
  }

}
