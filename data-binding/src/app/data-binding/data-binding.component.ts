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

getCurtiCurso(){
 return true;

}

  getValor(){

     return 1;
  }


  constructor() { }

  ngOnInit() {
  }

}
