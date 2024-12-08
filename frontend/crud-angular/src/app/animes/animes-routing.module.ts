import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimesComponent } from './animes/animes.component';
import { AnimeFormComponent } from './anime-form/anime-form.component';

const routes: Routes = [
  {path: '', component: AnimesComponent},
  {path: 'new', component: AnimeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
