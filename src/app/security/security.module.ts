import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { HttpAuthService } from './http-auth.service';
import {MyguardGuard} from "./myguard.guard";

@NgModule({
  imports: [
    SharedModule
  ],
  providers: [
    UserService,
    HttpAuthService,
    MyguardGuard
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }
