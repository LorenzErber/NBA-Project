import { Routes } from '@angular/router';
import { Playerdetails } from './playerdetails/playerdetails';
import { Homesite } from './homesite/homesite';
import { AddPlayer } from './addplayer/addplayer';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component: Homesite
    },
    {
        path: 'details/:id',
        component: Playerdetails
    }
    ,
    {
        path: 'addPlayer',
        component: AddPlayer
    }
];
