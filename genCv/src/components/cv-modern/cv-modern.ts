import { Component } from '@angular/core';
import { CvServices } from '../../services/cv-services';
import { Experiences } from '../cv-models/cv-models-module';

@Component({
  selector: 'app-cv-modern',
  imports: [],
  templateUrl: './cv-modern.html',
  styleUrl: './cv-modern.css',
})
export class CvModern {


constructor(private cvServices: CvServices){

  console.log('cv modern construit!');
}

ngOnInit() : void{

this.addModernExperiences();

}

// en tete 

// ajout des titres

// ajout des experiences dans le modele moderne

addModernExperiences(){

// this.cvServices.getExperience(addExp);
let exp=this.cvServices.getExperience();

 console.log("addExp dans modern :", exp);


}




  

}
