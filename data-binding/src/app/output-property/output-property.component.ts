import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

 @Input() valor : number =0;

 @Output() mudouValor = new EventEmitter();
  
 numeros  =  [];

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor : this.valor});
  }

  decrementa(){

    this.valor--;
    this.mudouValor.emit({novoValor : this.valor});
    
  }



  constructor() { }

  ngOnInit() {
     if (this.numeros.length>0){
          console.log('M');
     }  
        else{
          console.log('N');

        }
  }

}
