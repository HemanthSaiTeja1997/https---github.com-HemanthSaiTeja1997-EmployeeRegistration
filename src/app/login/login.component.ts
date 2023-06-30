import { Component, OnInit } from '@angular/core';
import { JwtclientService } from '../jwtclient.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
   
  });

  authRequest:any={
    "email":"sai@gmail.com",
    "password":"123456"
  };
  constructor(private service:JwtclientService,private fb: FormBuilder){}
  ngOnInit() {
  
  }

 

  onSubmit(): void {
    alert('Thanks!');
  }

}
