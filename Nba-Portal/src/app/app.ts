import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Playerservice } from './playerservice';
import { Player } from './player';
import { RouterLink } from '@angular/router';
import { Homesite } from './homesite/homesite';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nba-Portal';
  ps : Playerservice = inject(Playerservice);


  hs : Homesite = inject(Homesite);
}


