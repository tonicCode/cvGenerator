import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { link } from 'fs';
import path from 'path';
import { DisplayCv } from '../display-cv/display-cv';
import { Data } from '../data/data';
DisplayCv;
Data


export const routes: Routes = [

{path:"" , component:Data },
{path:"", component:DisplayCv}




];
