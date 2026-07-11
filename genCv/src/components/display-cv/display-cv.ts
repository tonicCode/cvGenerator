import { Component } from '@angular/core';
import { CvServices } from '../../services/cv-services';

@Component({
  selector: 'app-display-cv',
  imports: [],
  templateUrl: './display-cv.html',
  styleUrl: './display-cv.css',
})




export class DisplayCv {

  injectServices: CvServices;


constructor(injectServices : CvServices){
console.log("hello");

this.injectServices=injectServices;

}


test(){

// this.injectServices.ajoutExperience();

}


//   test(){
// console.log("hello");
//   }


}
