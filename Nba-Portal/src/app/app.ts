import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddPlayer } from "./addplayer/addplayer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Nba-Portal';
}
