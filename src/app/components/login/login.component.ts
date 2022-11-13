import {  HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatioService } from 'src/app/authenticatio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public loginForm!:FormGroup
  
  constructor(
    private formBuilder:FormBuilder,private http:HttpClient, private router:Router, 
    private auth:AuthenticatioService) { }

  ngOnInit(){
    this.loginForm=this.formBuilder.group({
      mail:[''],
      password:[''],
    })
  }
  login(){
    this.http.get<any>("http://localhost:8081/user")
  .subscribe(res=>{

    
    //user auth by get call
    const user=res.find((a:any)=>{
      return a.mail===this.loginForm.value.mail && a.password===this.loginForm.value.password
    });
    const admin=res.find((a:any)=>{
      return a.mail===this.loginForm.value.mail && a.password===this.loginForm.value.password && a.role==="admin";
    });
    if(admin){
      this.router.navigate(['admin-login']);
    }
    else if(user){
      this.loginForm.reset();
      this.router.navigate(['car-in-bidding']);
    }
    else{
      alert("Enter correct details")

    }

    // admin auth by get call
    // //admin auth by manually
    // if(this.loginForm.value=="admin@dxc.com" && this.loginForm.value=="admin123"){
    //   this.router.navigate(['admin-login'])
    // }

    },err=>{
      alert("Something wrong")
    })
    
  }
}