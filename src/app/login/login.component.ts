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
    email: ['',[ Validators.required]],
    password: ['',[ Validators.required]]
   
  });


  constructor(private service:JwtclientService,private fb: FormBuilder){}
  ngOnInit() {
  
  }

 

  onSubmit() {
    if(this.login.valid){
      this.service.login(this.login.value).subscribe(
        result=>{
          console.log(result.token);
          alert(result.message)
        }
       

         
      )
    }
   
  }

}
