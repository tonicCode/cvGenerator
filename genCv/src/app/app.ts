import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCv } from "../components/display-cv/display-cv";
import { CvModern } from "../components/cv-modern/cv-modern";
import { Data } from "../components/data/data";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayCv, CvModern, Data],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('genCv');
}
