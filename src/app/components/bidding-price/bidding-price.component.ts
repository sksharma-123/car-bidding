import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  } from '@angular/forms';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bidding-price',
  templateUrl: './bidding-price.component.html',
  styleUrls: ['./bidding-price.component.css']
})
export class BiddingPriceComponent implements OnInit {

  public bidForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.bidForm=this.formBuilder.group({
      biddername:[''],
      mobileNo:[''],
      bidPrice:[''],
    })
   
  }
  addBid(){
    this.http.post<any>("http://localhost:8081/bid",this.bidForm.value)
    .subscribe(res=>{
    this.bidForm.reset();
    this.router.navigate(['car-in-bidding']);
    },err=>{
      alert("correct details")
    })

  }


}
