import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validator, Validators, FormBuilder } from '@angular/forms';
import { CvServices } from '../../services/cv-services';
import { Experiences, PersonnalInfo } from '../cv-models/cv-models-module';





@Component({
  selector: 'app-data',
  imports: [ReactiveFormsModule],
  templateUrl: './data.html',
  styleUrl: './data.css',
})
export class Data {

// champ 
 experiences : Experiences={workstation:"",company:"",town:"",years:"",startDate:"",endDate:"",mission:[""]};



constructor(private cvService : CvServices){
  
}

infoForm=new FormGroup({

  // info perso
firstName:new FormControl('', Validators.required),
lastName:new FormControl('',Validators.required)
// profession:new FormControl('', Validators.required)

});


ngOnInit(){

this.infoForm.valueChanges.subscribe(value =>{

  const info : PersonnalInfo=this.infoForm.getRawValue();

this.cvService.addPersonalInfo(info);

console.log('nom modifier',info);

});


}




loginForm=new FormGroup({





// experiences

experiencesPost:new FormControl('',Validators.required),
experiencesNames:new FormControl('',Validators.required),
experiencesTown:new FormControl('',Validators.required),
experiencesYears:new FormControl('',Validators.required),
experiencesStart:new FormControl('',Validators.required),
experiencesEnding:new FormControl('',Validators.required),
experiencesMission:new FormControl('',Validators.required)





})

  toValidForm() : void{



// const PersonnalInfo={

// firstName:this.loginForm.get('nom')?.value?? "",
// lastName:this.loginForm.get('prenom')?.value??""

// }



const missionToText=this.loginForm.get('experiencesMission')?.value ?? "";


  const experiences={

workstation:this.loginForm.get('experiencesPost')?.value ?? "",
    company:this.loginForm.get('experiencesNames')?.value ?? "",
town:this.loginForm.get('experiencesTown')?.value ?? "",

years:this.loginForm.get('experiencesYears')?.value ?? "",
startDate:this.loginForm.get('experiencesStart')?.value ?? "",
endDate:this.loginForm.get('experiencesEnding')?.value ?? "",
mission:missionToText.split('\n').map(m  => m.trim()).filter(m => m !== "" )


    }


this.cvService.addExperiences(experiences);
// this.cvService.addPersonalInfo(PersonnalInfo);


console.log(" objets  :" , experiences);




  }




}
