import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesRoutingModule } from './animes-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [],
  imports: [
    AnimesRoutingModule,
    AppMaterialModule
  ]
})
export class AnimesModule { }
