import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { PrimengModule } from '../primeng/primeng.module';

import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PrimengModule
  ]
})
export class HeroesModule { }
