import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-in-bidding',
  templateUrl: './car-in-bidding.component.html',
  styleUrls: ['./car-in-bidding.component.css']
})
export class CarInBiddingComponent {

  constructor(private router:Router, private http:HttpClient,) { this.getcars();}
  //  public  _url:string="http//localhost:8081/cars";

  data:any;

   getcars(){
    return this.http.get("http://localhost:8081/car/status/0")
    .subscribe((data1)=>{
      this.data =data1,
      console.log(data1);
    });

    
  }
  gotobid(){
    this.router.navigate(['bidding-price']);
  }

}
