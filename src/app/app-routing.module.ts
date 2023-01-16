import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { PartsComponent } from './parts/parts.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'cars',
    component:CarsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'parts',
    component:PartsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
