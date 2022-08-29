import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesPageComponent,
    InfoPageComponent,
    EmployeeDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
