import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
