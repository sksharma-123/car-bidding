import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminLoginform!:FormGroup
  constructor(private http:HttpClient, private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.adminLoginform=this.formBuilder.group({
      
    })
  }
  toAddCar(){
    this.router.navigate(['add-car']);
  }
  updateCar(){
    this.http.put<any>("http://localhost:8081/car",this.updateCar)
      .subscribe(res=>{
        alert("Car Updated Successfully");
        this.router.navigate(['admin-login']);
      },err=>{
        alert("Something  went wrong")
      })

  }
  deleteCar(){
    // this.http.delete<any>("http://localhost:8081/car",this.deleteCar)
    //   .subscribe(res=>{
    //     alert("Car deleted Successfully");
    //     this.router.navigate(['admin-login']);
    //   },err=>{
    //     alert("Something  went wrong")
    //   })

  }



  toAddOwner(){
    this.router.navigate(['owner-details']);
  }
  
  car_sold(){
    this.router.navigate(['car-sold']);

  }
  gotoBidding(){
    this.router.navigate(['car-in-bidding']);
  }

}
