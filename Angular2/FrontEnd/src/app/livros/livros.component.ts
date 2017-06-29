import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livro } from "app/livros/livro";
import { LivrosService } from "app/livros/livros.service";
import { DialogComponent } from "app/dialog/dialog.component";


@Component({
  selector: 'app-livros',
   templateUrl: './livros.component.html',
    styleUrls: ['./livros.component.css'],
    providers: [LivrosService,DialogComponent],
    
    
   
})

export class LivrosComponent implements OnInit {
showDialog = false;
 livros : Livro[];
 titulo : string;
 isActive:boolean;
 isModal:boolean;
 @Input() livro: Livro;


  constructor(private livroService : LivrosService) {

   }

  loadLivros(){
   
   this.livroService.getLivro().subscribe((data:Livro[]) => this.livros = data, error => console.log(error), ()=> console.log(this.livros));

  }

  ngOnInit() {
     
    this.loadLivros();
  }

  mostrar(_titulo:string,_livro:Livro): void {
      this.titulo = _titulo
      this.livro = _livro
      this.showDialog = !this.showDialog
     // this.isActive = true;
  }

  close():boolean{
    console.log('M')
    return  this.isActive = false;
  }
   
   getModal():boolean{
    return this.isModal = true;
   }

   getView():boolean{
     return this.isActive;
   }

}


