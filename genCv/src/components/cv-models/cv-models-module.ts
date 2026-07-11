import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })


export interface PersonnalInfo{

firstName:string;
lastName:string;




}






export interface Experiences {

company:string | null;
years : string | null;
startDate:string | null;
endDate?:string | null;




 }


export interface Formation {

formationCenter:string;
startDate : string;
endDate?:string;


 }





