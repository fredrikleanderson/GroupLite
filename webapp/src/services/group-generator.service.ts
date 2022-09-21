import { Injectable } from '@angular/core';
import { Member } from 'src/entities/member';
import { GroupModel } from 'src/models/group-model';

@Injectable({
  providedIn: 'root'
})
export class GroupGeneratorService {

  constructor() { }

  generateGroups(members:Member[], numberOfGroups:number):GroupModel[]{
    
    const result:GroupModel[] = []
    let member = members[0]
    result[0] = new GroupModel()
    result[0].members.push(member)
    console.log(result[0].members)
    // result[0].members.push(members[0])

    // while(members.length > 0){
      
    //   for(let i = 0; i < numberOfGroups; i++){
    //     let randomNumber = Math.floor(Math.random() * members.length)
    //     result[i].members.push(members[randomNumber])
    //     members.pop()
    //   }
    // }
    
    return result
  }
}
