import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SkuComponent } from './sku/sku.component';
import { SkuModule } from "app/sku/sku.module";
import { BotaoModule } from "app/botao/botao.module";

@NgModule({
  declarations: [
    AppComponent,
    SkuComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BotaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
