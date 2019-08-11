import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { userTemplate } from '../structure/userTemplate';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
constructor(private userServiceObject: UserService,private router:Router) { }

userObjectArray: userTemplate[]
showTable:boolean
noRecordsMsg:string
  ngOnInit() {
   this.userObjectArray = this.userServiceObject.listUser()
   console.log(this.userObjectArray);
   this.showTable = this.userObjectArray.length > 0
   this.noRecordsMsg = "NO RECORDS FOUND";
  }
  removeRow(id){
     this.userServiceObject.delete(id);
  }

  EditRow(id){
      this.router.navigate(['/edit'], { queryParams: { id: id} });
    }
}
