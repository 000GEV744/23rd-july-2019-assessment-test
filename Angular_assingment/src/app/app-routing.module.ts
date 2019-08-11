import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './user/add/add.component';
import { ListComponent } from './user/list/list.component';
import { EditComponent } from './user/edit/edit.component';


const routes: Routes = [
  
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'edit',
    component: EditComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
