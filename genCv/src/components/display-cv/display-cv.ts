import { Component } from '@angular/core';
import { CvServices } from '../../services/cv-services';

@Component({
  selector: 'app-display-cv',
  imports: [],
  templateUrl: './display-cv.html',
  styleUrl: './display-cv.css',
})




export class DisplayCv {

 


constructor(private injectServices : CvServices){



}


// ngInit(){

// this.injectServices.getExperience();



// }

//   test(){
// console.log("hello");
//   }


}
