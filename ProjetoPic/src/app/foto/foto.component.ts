import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

    @Input() titulo: string;
    @Input() url: string;
    descricao: string;
    _id: string;

  constructor() { }

  ngOnInit() {
  }

}
