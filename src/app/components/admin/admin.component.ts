import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public adminForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private rouetr:Router) { }

  ngOnInit(): void {
    this.adminForm=this.formbuilder.group({
      adminmail:[''],
      adminpassword:['']
    })
  }
  AdminLogin(){
    this.http.get<any>("http://localhost:8081/admin")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.mail===this.adminForm.value.mail && a.password===this.adminForm.value.password
      });
      if(user){
        this.adminForm.reset();
        this.rouetr.navigate(['admin-login']);
      }
      },err=>{
        alert("Something wrong")
      })
  }

}
