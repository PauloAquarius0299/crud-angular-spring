import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesRoutingModule } from './animes-routing.module';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    AnimesRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class AnimesModule { }
