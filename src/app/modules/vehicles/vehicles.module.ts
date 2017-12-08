import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesComponent]
})
export class VehiclesModule { }
