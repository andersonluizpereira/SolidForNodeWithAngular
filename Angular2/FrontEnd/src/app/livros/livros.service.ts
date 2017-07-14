import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Livro, LivroPost } from "app/livros/livro";
import 'rxjs/add/operator/map';

@Injectable()
export class Configuration {
     
     public Server: string = 'http://localhost:3412';
     public ApiUrl: string = '/livros';
   
   
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class LivrosService {
 
    private actionUrl: string;
    private headers: Headers;
    private obj :any;

     

     constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl ;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
     
    }

    public getLivro(): Observable<Livro[]>{
    return  this._http.get(this.actionUrl).map(this.extractData)
   }

    public PutLivro(_livro:LivroPost) : Observable<Livro[]>{
        let body = this.Data(_livro)
        console.log(body)
       return this._http.put(this.actionUrl,body, { headers : this.headers}).map(this.extractData)
    }

 private extractData(res: Response)  {
     let body =  res.json();
     let corpo = body || {};
     return body || {};

 }

 private Data(_livro:Livro)  {
     
     return JSON.stringify(_livro);

 }
 
}

 


