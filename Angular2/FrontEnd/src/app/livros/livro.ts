export interface Livro {
        id: number;
        titulo: string;
        descricao: string;
        preco: number;
}

export interface LivroPost {
        id: number;
        titulo: string;
        descricao: string;
        preco: number;
}


 export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }


    public get mensagem(): string {
        return this._mensagem
    }

    public get inclusao(): boolean{
        return this._inclusao;
    }
}