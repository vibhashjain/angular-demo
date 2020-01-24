
import {NgModule}  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../app/user/user.component';
import {LoginComponent} from '../app/login/login.component';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
const routes: Routes = [
{ path: 'user', component: UserComponent }, 
{ path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }