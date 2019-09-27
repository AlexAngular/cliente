import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersContentComponent } from './users-content/users-content.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';


const routes: Routes = [
  { path: '', component: UsersContentComponent, children :[
    { path: 'list', component: UserListComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'edit/:id', component: UserEditComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
