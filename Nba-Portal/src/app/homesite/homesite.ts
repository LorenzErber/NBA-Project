import { Component, inject, Injectable } from '@angular/core';
import { Playerservice } from '../playerservice';
import { Player } from '../player';
import{MatCardModule} from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import{FormGroup, FormControl, ReactiveFormsModule, FormControlDirective} from '@angular/forms';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select'
import { players } from '../playerservice-list';

@Injectable({
  providedIn: 'root'  
})
@Component({
  selector: 'app-homesite',
  imports: [MatCardModule,RouterLink,MatInputModule,MatSelectModule],
  templateUrl: './homesite.html',
  styleUrl: './homesite.css'
})

export class Homesite {
  players: Player[] = players;
ps:Playerservice=inject(Playerservice);
route: ActivatedRoute=inject(ActivatedRoute);
constructor(){
  this.players=this.ps.getPlayers();
}


}
