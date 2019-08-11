import { Injectable } from '@angular/core';
import { userTemplate } from './structure/userTemplate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userServiceArray: userTemplate[]=[]
  delIndex:number
  constructor() { }  

  addUser(userObject){
    this.userServiceArray.push(userObject)
  }

  listUser(){
    return this.userServiceArray
  }

  delete(id){
    this.userServiceArray.find((u,i)=>{ 
      this.delIndex = i;
      return u.id == id;
    })
    this.userServiceArray.splice(this.delIndex,1)
  }
  find(id){
    console.log("inside find method")
    return this.userServiceArray.find((u)=>{
      console.log("finding........")
      return u.id == id
    }) 
  } 
} 
