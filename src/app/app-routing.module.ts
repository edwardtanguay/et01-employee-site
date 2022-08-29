import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
