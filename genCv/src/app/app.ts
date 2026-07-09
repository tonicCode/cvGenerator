import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayCv } from "../display-cv/display-cv";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplayCv],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('genCv');
}
