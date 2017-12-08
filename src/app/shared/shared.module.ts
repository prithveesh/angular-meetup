import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SortPipe],
  declarations: [SortPipe]
})
export class SharedModule { }
