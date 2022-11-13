import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
//import {ImagePath } from '@angular/core'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!:FormGroup;

  constructor(private fromBuilder:FormBuilder, private http:HttpClient,
     private router:Router ) { 
      
     }

    ngOnInit(): void {
    this.registerForm=this.fromBuilder.group({
      userName:[''],
      mail:[''],
      mobile:[''],
      password:[''],
      vpassword:['']

    }) 
  }
  
  signUp(){
    this.http.post<any>("http://localhost:8081/user",this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successful");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Something  went wrong")
    })

  }
  
}