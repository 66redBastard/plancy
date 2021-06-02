import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
// import { LayoutComponent } from './layout.component';
// import { LoginComponent } from './login.component';
// import { RegisterComponent } from './register.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
  declarations: [
    // LayoutComponent,
    // LoginComponent,
    // RegisterComponent
  
    LayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
})
export class AccountModule {}
