import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UserManagementComponent } from './user-management.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    component: UserManagementComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'roles', component: RolesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }

