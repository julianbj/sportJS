import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnknownComponent } from './unknown/unknown.component';
import { LoginComponent } from '../security/login/login.component';
import {MyguardGuard} from "../security/myguard.guard";

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'plan',
  loadChildren: 'app/plan/plan.module#PlanModule',
  canActivate: [MyguardGuard]
}, {
  path: 'run',
  loadChildren: 'app/run/run.module#RunModule',
  canActivate: [MyguardGuard]
}, {
  path: 'stat',
  loadChildren: 'app/stat/stat.module#StatModule',
  canActivate: [MyguardGuard]
}, {
  path: '**',
  component: UnknownComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
