import { Component } from '@angular/core';
import { CvServices } from '../../services/cv-services';
import { Experiences, PersonnalInfo } from '../cv-models/cv-models-module';

@Component({
  selector: 'app-cv-modern',
  imports: [],
  templateUrl: './cv-modern.html',
  styleUrl: './cv-modern.css',
})
export class CvModern {


experiences: Experiences[]=[];
personalInfo:PersonnalInfo[]=[];
actualCompany: string = "";


constructor(private cvServices: CvServices){

  console.log('cv modern construit!');
}

ngOnInit() : void{

this.addModernData();
// this.buildCv();
console.log("cl de actcompa :", this.actualCompany)

}

// en tete 

// ajout des titres

// ajout des experiences dans le modele moderne

addModernData() {

// this.cvServices.getExperience(addExp);
this.experiences=this.cvServices.getExperience();
this.personalInfo=this.cvServices.getPersonalInfo();


 console.log("addExp dans modern :",this.experiences);
 console.log("addInfoperso dans modern :",this.personalInfo);


}

// buildCv(){

// // title 

// // name emploi 
// this.experiences.forEach(elem  =>{


// this.actualCompany=`Poste : ${elem.company}`;




// });

// ;




//}




}


  


