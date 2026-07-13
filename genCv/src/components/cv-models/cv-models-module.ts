import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })


export interface PersonnalInfo{

firstName:string|null;
lastName:string|null;




}






export interface Experiences {
workstation:string|null;
company:string | null;
town:string|null;
years : string | null;
startDate:string | null;
endDate?:string | null;
mission:string[];




 }


export interface Formation {

formationCenter:string;
startDate : string;
endDate?:string;


 }





