import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Unit } from 'src/entities/unit';

@Injectable({
  providedIn: 'root'
})
export class ActiveUnitService {

  private activeUnit = new Subject<Unit>()

  getActiveUnit():Observable<Unit>{
    return this.activeUnit.asObservable()
  }

  setActiveUnit(unit:Unit):void{
    this.activeUnit.next(unit)
  }

  clearActiveUnit():void{
    this.activeUnit.complete
  }
}
