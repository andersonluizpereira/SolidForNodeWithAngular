import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserServiceService } from "app/user/user-service.service";
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MeuPrimeiroComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
