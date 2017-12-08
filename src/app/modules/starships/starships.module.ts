import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './starships/starships.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StarshipsRoutingModule
  ],
  declarations: [StarshipsComponent]
})
export class StarshipsModule { }
