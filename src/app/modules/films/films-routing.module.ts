import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { DetailsComponent } from './details/details.component';
import { ResolveDataService } from './details/resolve-data.service';

const routes: Routes = [{
  path: '',
  component: FilmsComponent
}, {
  path: ':id',
  component: DetailsComponent,
  resolve: {
    data: ResolveDataService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FilmsRoutingModule { }
