import { Component, OnInit } from '@angular/core';
import { JwtclientService } from '../jwtclient.service';
import { Employee } from '../register/domain/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
EmployeeData:Employee[]=[]
displayedColumns: string[] = ['position', 'name', 'email', 'department'];
constructor(private service:JwtclientService){}

ngOnInit():void{
this.service.getEmployees().subscribe({next:data=>{this.EmployeeData=data},
  error:e=>{alert("Something went wrong.Check Network Connection...")}})
}
}
