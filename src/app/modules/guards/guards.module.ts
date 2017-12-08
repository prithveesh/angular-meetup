import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataResolverService } from './data-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ DataResolverService ]
})
export class GuardsModule { }
