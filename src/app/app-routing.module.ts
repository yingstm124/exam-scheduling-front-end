import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManageExamComponent } from './components/manage-exam/manage-exam.component';

import { AuthfireGuard } from './authfire.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent, canActivate:[AuthfireGuard]},
  { path: 'manage/:term/:year', component:  ManageExamComponent}
  // { path: '', component:  ManageExamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
