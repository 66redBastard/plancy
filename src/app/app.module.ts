import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor, ErrorInterceptor } from './auth/helpers/index';

import { AlertComponent } from './auth/components/alert/alert.component';
import { AccountHeaderComponent } from './shared/components/account-header/account-header.component';
import { PopupComponent } from './shared/components/popup/popup.component';

// import { fakeBackendProvider } from './auth/helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AccountHeaderComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
