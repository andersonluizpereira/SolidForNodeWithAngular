import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
     
     public Server: string = 'http://localhost:3412/';
     public ApiUrl: string = 'livros/';
   
   
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class LivrosService {
    private actionUrl: string;
    private headers: Headers;
    private obj :any;

     

  constructor() { }

}
