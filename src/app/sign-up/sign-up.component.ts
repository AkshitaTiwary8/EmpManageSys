import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm!: FormGroup;

  constructor(private formbuilder: FormBuilder,
    private http:HttpClient,
    private router:Router) { }
  //using Form Builder
  ngOnInit(): void {
    
  
  this.signUpForm= this.formbuilder.group({
    fullname: [''],
    email: [''],
    password: [''],
    mobile: ['']
  });
}
  signUp() {
    // console.log(this.signUpForm.value);
    this.http.post<any>("http://localhost:3000/signUp",this.signUpForm.value)
    .subscribe(res=>{
      alert("User registered successfully");
      this.signUpForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("Something went wrong")
    })
  }

}

