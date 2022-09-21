import { Injectable } from '@angular/core';
import { Group } from 'src/entities/group';
import { Member } from 'src/entities/member';
import { GroupModel } from 'src/models/group-model';

@Injectable({
  providedIn: 'root'
})
export class GroupGeneratorService {

  constructor() { }

  generateGroups(members:Member[], numberOfGroups:number):Group[]{
    
    const result:GroupModel[] = Array(numberOfGroups)
    for(let i = 0; i < result.length; i++) result[i] = new GroupModel()

    while(members.length > 0){
      for(let i = 0; i < result.length; i++){
        let randomNumber = Math.floor(Math.random() * members.length)
        result[i].members.push(members[randomNumber])
        members.splice(randomNumber, 1)
        if(members.length < 1) break
      }
    }
    
    return result
  }
}
