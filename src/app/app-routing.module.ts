import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from './modules/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: 'films',
    loadChildren: './modules/films/films.module#FilmsModule',
    resolve: {
      data: DataResolverService
    }
  }, {
    path: 'people',
    loadChildren: './modules/people/people.module#PeopleModule',
    resolve: {
      data: DataResolverService
    }
  }, {
    path: 'vehicles',
    loadChildren: './modules/vehicles/vehicles.module#VehiclesModule',
    resolve: {
      data: DataResolverService
    }
  }, {
    path: 'species',
    loadChildren: './modules/species/species.module#SpeciesModule',
    resolve: {
      data: DataResolverService
    }
  }, {
    path: 'starships',
    loadChildren: './modules/starships/starships.module#StarshipsModule',
    resolve: {
      data: DataResolverService
    }
  }, {
    path: 'search',
    loadChildren: './modules/search/search.module#SearchModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
