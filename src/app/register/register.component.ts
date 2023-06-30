import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { JwtclientService } from '../jwtclient.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  register = this.fb.group({
    
    ecode: ['',[ Validators.required,Validators.minLength(1),Validators.maxLength(10)]],
    email: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(25),Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(19),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
    ename: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
    department: ['',[ Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
  });

 

  onSubmit(){
    this.singup.storeData(this.register.value).subscribe(
      {next(x){alert("Employee Data Added")},
       error(x){alert("Error"+x)},
       complete(){alert("FINISHED REGISTRATION")}
    
    }
    )
  
   }
  

  constructor(private fb: FormBuilder,private singup:JwtclientService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
