import { Component, OnInit, Input } from '@angular/core';
import { Livro } from "app/livros/livro";
import { LivrosService } from "app/livros/livros.service";

@Component({
  selector: 'app-livros',
   templateUrl: './livros.component.html',
    styleUrls: ['./livros.component.css'],
    providers: [LivrosService]
})

export class LivrosComponent implements OnInit {
 livros : Livro[];
 isActive:boolean;
 @Input() livro: Livro;

  constructor(private livroService : LivrosService) {

   }

  loadLivros(){
   
   this.livroService.getLivro().subscribe((data:Livro[]) => this.livros = data, error => console.log(error), ()=> console.log(this.livros));

  }

  ngOnInit() {
    this.loadLivros();
  }

  mostrar(_livro:Livro): void {
      this.livro = _livro
      console.log(this.livro)


  this.isActive = !this.isActive;
  }

   getView():boolean{
     return this.isActive;
   }

}
