import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { Configuration } from "app/livros/livros.service";


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent
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
