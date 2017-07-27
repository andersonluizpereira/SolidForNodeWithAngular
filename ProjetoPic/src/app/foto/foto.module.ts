import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPorTitulo } from 'app/foto/foto.pipe';
import { FotoComponent } from "app/foto/foto.component";
import { FotoService } from "app/foto/foto.service";

@NgModule({
  //imports: [  CommonModule  ],
        declarations: [ FotoComponent, FiltroPorTitulo ],
        exports: [ FotoComponent, FiltroPorTitulo ],
        providers: [ FotoService ]
})
export class FotoModule { }
