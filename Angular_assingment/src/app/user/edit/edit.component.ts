import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../user.service';
import { userTemplate } from '../structure/userTemplate';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   editObj:any
  user:userTemplate
  temporary:userTemplate
  constructor(private route:ActivatedRoute, private userServiceObject: UserService) { }

  ngOnInit() {
    this.editObj=this.route.snapshot.queryParams.id
    console.log(this.editObj)
    this.user=this.userServiceObject.find(this.editObj);
    this.temporary=this.user
    console.log(this.temporary)
  }
  update(){  
    if(this.temporary==this.user){
      return
    }
    else{
    this.userServiceObject.delete(this.editObj)
    this.userServiceObject.addUser(this.user)
    console.log(this.user)
    }
  } 
}