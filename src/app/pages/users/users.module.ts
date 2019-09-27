import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersContentComponent } from './users-content/users-content.component';

@NgModule({
  declarations: [
    UsersContentComponent,
    UserListComponent, 
    UserCreateComponent, 
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers:[

  ],
})
export class UsersModule { }
