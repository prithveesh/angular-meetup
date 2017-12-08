import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [{
  path: '',
  component: SpeciesComponent

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
