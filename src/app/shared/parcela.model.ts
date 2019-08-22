export class Parcela {

    private _numeroParcela:number;
    private _valorJuros:number;
    private _valorParcela:number;
    private _amortizacao:number;
    private _saldoDevedor:number;


    get numeroParcela(): number {
        return this._numeroParcela;
    }
    set numeroParcela(value: number) {
        this._numeroParcela = value;
    }

    get valorJuros(): number {
        return this._valorJuros;
    }
    set valorJuros(value: number) {
        this._valorJuros = value;
    }

    get valorParcela(): number {
        return this._valorParcela;
    }
    set valorParcela(value: number) {
        this._valorParcela = value;
    }

    get amortizacao(): number {
        return this._amortizacao;
    }
    set amortizacao(value: number) {
        this._amortizacao = value;
    }

    get saldoDevedor(): number {
        return this._saldoDevedor;
    }
    set saldoDevedor(value: number) {
        this._saldoDevedor = value;
    }

    toString():string{
        return "valorJuros:"+this.valorJuros.toLocaleString()+ ",valorParcela:"+this.valorParcela.toLocaleString()+",amortizacao:"+this.amortizacao.toLocaleString()+",saldoDevedor:"+this.saldoDevedor.toLocaleString();
    }
    
}