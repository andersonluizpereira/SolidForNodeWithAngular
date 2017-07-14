import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Livro, LivroPost } from "app/livros/livro";
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
 livrosPost : Livro;
 titulo : string;
 isActive:boolean;
 isModal:boolean;
 @Input() livro: Livro;

_id: number;
_titulo: string;
_descricao: string;
_preco: number;
 


  constructor(private livroService : LivrosService) {

   }

  loadLivros(){
   
   this.livroService.getLivro().subscribe((data:Livro[]) => this.livros = data, error => console.log(error), ()=> console.log(this.livros));

  }

  ngOnInit() {
     
    this.loadLivros();
  }

SalvarDados() {

    
     this.livro.titulo = this._titulo;
     this.livro.descricao = this._descricao;
     this.livro.preco = this._preco;
      this.livro.id =  this._id;
    console.log(this.livroService.PutLivro(this.livro))

}

 

  mostrar(_titulo:string,_livro:Livro): void {
      this.titulo = _titulo
      this.livro = _livro
      
     
      this._titulo  = _livro.titulo;
      this._descricao  = _livro.descricao;
      this._preco  = _livro.preco;
      this._id = _livro.id;


      

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


