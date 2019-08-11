import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {userTemplate} from '../structure/userTemplate'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userObjArray: userTemplate[] = []
  constructor(private userServiceObject: UserService ) { }

  ngOnInit() {
    
  }
  login(_data){
    console.log('User Logged In');
    this.userServiceObject.addUser(_data)
  }

  
}
