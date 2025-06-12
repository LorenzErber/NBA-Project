import { Component, inject } from '@angular/core';
import { MatCard, MatCardActions } from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import { Player } from '../player';
import { routes } from '../app.routes';
import { Playerservice } from '../playerservice';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-playerdetails',
  imports: [MatCard, MatCardActions, MatCardModule,RouterLink],
  templateUrl: './playerdetails.html',
  styleUrl: './playerdetails.css'
})
export class Playerdetails {
  p: Player|undefined;
  PlaSer: Playerservice = inject(Playerservice);
  route: ActivatedRoute=inject(ActivatedRoute);
  constructor() {
    this.p=this.PlaSer.getPlayerbyId(Number(this.route.snapshot.params['id']));
    
  }
}
