import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'animes'},
  {path: 'animes',
    loadChildren: () => import('./animes/animes.module').then(m=> m.AnimesModule)
   }
];
