import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-sold',
  templateUrl: './car-sold.component.html',
  styleUrls: ['./car-sold.component.css']
})
export class CarSoldComponent implements OnInit {

  constructor(private http:HttpClient) { this.getSoldCars()}
  
  ngOnInit(): void {
  }

  cars:any;
  getSoldCars(){
    this.http.get("http://localhost:8081/car/status/1",)
    .subscribe((cars)=>
      {
        this.cars=cars;
        console.log(cars);
      })

  }
}
