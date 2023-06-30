import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './register/domain/employee';

@Injectable({
  providedIn: 'root'
})
export class JwtclientService {
  url:string="http://localhost:8086/fetchall"
  constructor(private http:HttpClient) { }

getEmployees():Observable<Array<Employee>>{
  return this.http.get<Array<Employee>>("http://localhost:8086/fetchall")
}

storeData(data1:any){
  return this.http.post("http://localhost:8086/signup",data1);
}

 
}
