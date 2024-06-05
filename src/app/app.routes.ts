import { Routes } from '@angular/router';
import { LandingHomepageComponent } from './landing-page/landing-homepage/landing-homepage.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    {path: 'landing-page', component: LandingHomepageComponent}
];
