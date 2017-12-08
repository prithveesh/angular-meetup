import {} from '../environments'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {  CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { GuardsModule } from './modules/guards';

import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
