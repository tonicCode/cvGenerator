import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validator, Validators, FormBuilder } from '@angular/forms';
import { CvServices } from '../../services/cv-services';
import { Experiences } from '../cv-models/cv-models-module';





@Component({
  selector: 'app-data',
  imports: [ReactiveFormsModule],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data {

// champ 
public experiences : Experiences={company:"",years:"",startDate:"",endDate:""};



constructor(private cvService : CvServices){
  
}






loginForm=new FormGroup({

nom:new FormControl('', Validators.required),
prenom:new FormControl('',Validators.required),
profession:new FormControl('', Validators.required),

experiencesNames:new FormControl('',Validators.required),
experiencesYears:new FormControl('',Validators.required),
experiencesStart:new FormControl('',Validators.required),
experiencesEnding:new FormControl('',Validators.required)






})

  toValidForm() : void{

    this.experiences={
company:this.loginForm.get('experiencesNames')?.value ?? "",
years:this.loginForm.get('experiencesYears')?.value ?? "",
startDate:this.loginForm.get('experiencesStart')?.value ?? "",
endDate:this.loginForm.get('experiencesEnding')?.value ?? ""

    }


this.cvService.addExperiences(this.experiences);


console.log(" objets  :" , this.experiences);




  }




}
