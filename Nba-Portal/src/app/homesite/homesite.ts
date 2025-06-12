import { Component, inject } from '@angular/core';
import { Playerservice } from '../playerservice';
import { Player } from '../player';
import{MatCardModule} from '@angular/material/card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-homesite',
  imports: [MatCardModule,RouterLink],
  templateUrl: './homesite.html',
  styleUrl: './homesite.css'
})

export class Homesite {
players:Player[];
ps:Playerservice=inject(Playerservice);
constructor(){
  this.players=this.ps.getPlayers();
}
}
