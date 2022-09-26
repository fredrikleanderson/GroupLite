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
    return this.populateGroups(Array(numberOfGroups).fill(null).map(x => new GroupModel()), members, 0, Math.floor(Math.random() * members.length))
  }

  private populateGroups(groups:Group[], members:Member[], currentIndex:number, randomNumber:number):Group[]{
    if(members.length < 1) return groups
    groups[currentIndex].members.push(members[randomNumber])
    members.splice(randomNumber, 1)
    return this.populateGroups(groups, members, currentIndex = currentIndex === groups.length - 1 ? 0 : currentIndex + 1, Math.floor(Math.random() * members.length))
  }
}