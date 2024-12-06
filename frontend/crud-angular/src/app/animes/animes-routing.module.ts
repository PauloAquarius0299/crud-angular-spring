import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimesComponent } from './animes/animes.component';

const routes: Routes = [
  {path: '', component: AnimesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
