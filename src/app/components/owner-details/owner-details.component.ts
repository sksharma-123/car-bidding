import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})
export class OwnerDetailsComponent implements OnInit {

  public owner!:FormGroup;
  constructor(private http:HttpClient, private fromBuilder:FormBuilder,private router:Router) { }

  ngOnInit(){
    this.owner=this.fromBuilder.group({
      name:[''],
      mailId:[''],
      mobileNo:[''],
      address:[''],
    })
  }
  addOwner(){    
      this.http.post<any>("http://localhost:8081/owner",this.owner.value)
      .subscribe(res=>{
        alert("Owner Details added Successfully");
        this.owner.reset();
        this.router.navigate(['admin-login']);
      },err=>{
        alert("Something  went wrong")
      })

  }
}