import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [
    UserManagementComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
