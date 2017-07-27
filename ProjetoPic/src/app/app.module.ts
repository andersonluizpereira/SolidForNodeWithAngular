import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FotoModule } from "app/foto/foto.module";
import { BotaoComponent } from './botao/botao.component';


@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
