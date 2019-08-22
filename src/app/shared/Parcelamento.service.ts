import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Parcela } from './parcela.model';

declare const moment: any;

@Injectable()
export class ParcelamentoService {

    private taxaJuros = new Subject<number>();
    @Output() parcelas: EventEmitter<Parcela[]> = new EventEmitter();


    constructor() {
        console.log("aaa");
    }

    public calcular(valorFinanciamento: number, prazoFinanciamento: number, valorImovel: number): Observable<boolean> {


        if (!valorFinanciamento || !prazoFinanciamento || !valorImovel) {
            this.taxaJuros.next(0);
            return of(false);
        }
        var juros = 0;
        if (valorImovel < 100000.00) {
            juros = 0.01;
        } else {
            juros = 0.015;
        }

        this.parcelas.emit(this.calculaParcela([], valorFinanciamento / prazoFinanciamento, valorFinanciamento, prazoFinanciamento, 1, juros));
        this.taxaJuros.next(juros);
        return of(true);

    }

    public getCalculo(){
        return this.parcelas;
    }

    public calculaParcela(lista: Parcela[], valorAmortizacao: number, saldoDevedor: number, numeroTotalParcelas: number, parcelaAtual: number, taxaJuros: number): Parcela[]{
        var parcela = new Parcela();
        parcela.numeroParcela = parcelaAtual;
        parcela.amortizacao = valorAmortizacao;
        parcela.valorJuros = taxaJuros * saldoDevedor;
        parcela.valorParcela = parcela.amortizacao + parcela.valorJuros;
        parcela.saldoDevedor = saldoDevedor - parcela.amortizacao;


        lista.push(parcela);
        if (numeroTotalParcelas == parcelaAtual)
            return lista;
        return this.calculaParcela(lista, valorAmortizacao, parcela.saldoDevedor, numeroTotalParcelas, parcelaAtual + 1, taxaJuros);
    }



}

