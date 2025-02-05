import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'volunteers',
        component: VolunteersComponent
    }
];
