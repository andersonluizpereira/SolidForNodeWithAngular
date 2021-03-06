import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import {  Configuration } from "app/monitor/monitor.service";
import { IpsearchComponent } from './ipsearch/ipsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    IpsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
