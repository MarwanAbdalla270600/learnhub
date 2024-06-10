import { Routes } from '@angular/router';
import { LandingHomepageComponent } from './landing-page/landing-homepage.component';
import { CoursePageComponent } from './course-page/course-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
    { path: 'landing-page', component: LandingHomepageComponent },
    { path: 'courses', component: CoursePageComponent }
];
