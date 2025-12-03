import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'formulaire', component: FormulaireComponent } 
];
