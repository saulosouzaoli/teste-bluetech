import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParcelamentoService } from '../shared/Parcelamento.service';
import { Parcela } from '../shared/parcela.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent  {

  displayedColumns: string[] = ['numeroParcela','valorJuros','valorParcela','amortizacao','saldoDevedor'];  

  subscription: Subscription;
  dataSource: MatTableDataSource<Parcela[]>;

  public constructor(private calculoService:ParcelamentoService){

    this.subscription= calculoService.getCalculo().subscribe(parcelas=>{
      console.log("chegou");
      if(parcelas){        
        this.dataSource = new MatTableDataSource<Parcela[]>(parcelas);
        console.log(parcelas);
      }
    });

   }

}
