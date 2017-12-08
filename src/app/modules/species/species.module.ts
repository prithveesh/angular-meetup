import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species/species.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SpeciesRoutingModule
  ],
  declarations: [SpeciesComponent]
})
export class SpeciesModule { }
