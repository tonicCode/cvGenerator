import { Injectable } from '@angular/core';
import { Experiences } from '../components/cv-models/cv-models-module';
import e from 'express';

@Injectable({
  providedIn: 'root',
})
export class CvServices {
  

// champs 
 experiencesServices : Experiences[]=[];



constructor(){



}


//method
addExperiences(experiences : Experiences) {

this.experiencesServices.push(experiences);


}



// methode 

getExperience() : Experiences[]{


return this.experiencesServices;
}



}
