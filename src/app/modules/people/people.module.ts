import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule { }
