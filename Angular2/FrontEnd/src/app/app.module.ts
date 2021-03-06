import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LivrosComponent } from './livros/livros.component';
import { Configuration } from "app/livros/livros.service";
import { DialogComponent } from './dialog/dialog.component';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
