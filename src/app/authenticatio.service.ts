import { Injectable } from '@angular/core';
import {HttpClient } from'@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatioService {
  private logiUrl="http://localhost:8081/user"
  constructor(private http:HttpClient) { }

  

}
 