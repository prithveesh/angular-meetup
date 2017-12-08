import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ],
  declarations: [FilmsComponent]
})
export class FilmsModule { }
