import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NutesModule } from './nutes/nutes.module';
import { AppRoutesModule } from './app.routes.module';
import { ApiInterceptor } from './api.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowerModule } from './flowers/flowers.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NutesModule,
    FlowerModule,
    AppRoutesModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
