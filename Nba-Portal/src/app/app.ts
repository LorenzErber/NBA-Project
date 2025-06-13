
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPlayer } from "./addplayer/addplayer";
import { Playerservice } from './playerservice';
import { Player } from './player';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nba-Portal';
  ps : Playerservice = inject(Playerservice);


}


