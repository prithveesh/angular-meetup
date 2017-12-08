import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';

const routes: Routes = [{
  path: '',
  component: StarshipsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
