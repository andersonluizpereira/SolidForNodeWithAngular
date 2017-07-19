import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string ='http://www.microsoft.com.br';
  urlImagem = 'http://lorempixel.com/400/200/sports';
  cursoAngular : boolean = true;
  valorAtual: string ='';
  valorSalvo: string ='';
  isMouseOver: boolean = false;
  nome: string='abc';

  pessoa: any = {
     nome:'def',
     idade:20

  }


  onMouseOverOut(){
  this.isMouseOver = !this.isMouseOver;
    
  }

salvarValor(valor){
  this.valorSalvo = valor;
}

getCurtiCurso(){
 return true;

}

 botaoClicado(){
  alert('Botão clicado!')

 }   

 onKeyUp(evento : KeyboardEvent){
  this.valorAtual = ((<HTMLInputElement>evento.target).value);
  
 }

  getValor(){

     return 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
