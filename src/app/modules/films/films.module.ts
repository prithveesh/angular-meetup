import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { SharedModule } from '../../shared';
import { DetailsComponent } from './details/details.component';
import { ResolveDataService } from './details/resolve-data.service';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule
  ],
  declarations: [FilmsComponent, DetailsComponent],
  providers: [ResolveDataService]
})
export class FilmsModule { }
