import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validator, Validators } from '@angular/forms';





@Component({
  selector: 'app-data',
  imports: [ReactiveFormsModule],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data {

loginForm=new FormGroup({

nom:new FormControl('', Validators.required),
prenom:new FormControl('',Validators.required),
profession:new FormControl('', Validators.required)




})

  




}
