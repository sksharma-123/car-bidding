import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  public add_Car!:FormGroup;
  constructor(private http:HttpClient, private fromBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.add_Car=this.fromBuilder.group({
      carNo:[''],
      descrip:[''],
      fuelType:[''],
      gearType:[''],
      km:[''],
      model:[''],
      status:[''],
      price:[''],      
    })

  }
  addCar(){
      this.http.post<any>("http://localhost:8081/car",this.add_Car.value)
      .subscribe(res=>{
        this.add_Car.reset();
        this.router.navigate(['admin-login']);
      },err=>{
        alert("Something  went wrong")
      })

  }

}
