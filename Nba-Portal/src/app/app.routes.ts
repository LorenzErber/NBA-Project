import { Routes } from '@angular/router';
import { Playerdetails } from './playerdetails/playerdetails';
import { Homesite } from './homesite/homesite';

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
];
