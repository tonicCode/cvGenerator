import { Injectable } from '@angular/core';
import { Experiences, PersonnalInfo } from '../components/cv-models/cv-models-module';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class CvServices {
  

// champs 
 experiencesServices : Experiences[]=[];
 personalInfoServices: PersonnalInfo[]=[];
 derniereInfo:PersonnalInfo[]=[];



constructor(){



}


//method
addExperiences(experiences : Experiences) {


  if(this.experiencesServices.length< 5){
this.experiencesServices.push(experiences);
  
}else {

console.log("nbr MAX D EXPERIENCES AUTORISER !!!")

}




}



// methode 

getExperience() : Experiences[]{


return this.experiencesServices;
}



addPersonalInfo(data : PersonnalInfo) {

this.personalInfoServices.push(data);

}



getPersonalInfo() : PersonnalInfo[]{

  

//  this.derniereInfo=this.personalInfoServices[this.personalInfoServices.length-1]


return this.personalInfoServices;
}




}
