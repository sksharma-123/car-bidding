import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { HomeComponent } from './components/home/home.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { CarInBiddingComponent } from './components/car-in-bidding/car-in-bidding.component';
import { CarSoldComponent } from './components/car-sold/car-sold.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import { BiddingPriceComponent } from './components/bidding-price/bidding-price.component';
import { BiddingComponent } from './components/car-in-bidding/bidding/bidding.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    AddCarComponent,
    OwnerDetailsComponent,
    CarInBiddingComponent,
    CarSoldComponent,
    BiddingComponent,
    BiddingPriceComponent,
    AdminComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
