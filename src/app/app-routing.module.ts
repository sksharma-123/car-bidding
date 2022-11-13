import { createMayBeForwardRefExpression } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BiddingPriceComponent } from './components/bidding-price/bidding-price.component';
import { CarInBiddingComponent } from './components/car-in-bidding/car-in-bidding.component';
import { CarSoldComponent } from './components/car-sold/car-sold.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  
  {
    path:'login', component:LoginComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'bidding-price', component:BiddingPriceComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'admin-login', component:AdminLoginComponent
  },
  {
    path:'add-car', component:AddCarComponent
  },
  {
    path:'owner-details', component:OwnerDetailsComponent
  },
  {
    path:'car-in-bidding', component:CarInBiddingComponent
  },
  {
    path:'car-sold', component:CarSoldComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
