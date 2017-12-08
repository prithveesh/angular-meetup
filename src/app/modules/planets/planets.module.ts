import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets/planets.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PlanetsRoutingModule
  ],
  declarations: [PlanetsComponent]
})
export class PlanetsModule { }
