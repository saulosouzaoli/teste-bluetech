import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParcelamentoService } from '../shared/Parcelamento.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  prazoFinanciamento: number;
  valorFinanciamento: number;
  valorImovel: number;
  juros: number;
  valorTotal: string;

  constructor(private calculoService: ParcelamentoService, private router: Router) { }

  ngOnInit() {
  }

  public regraValorFinanciamento() {
    if (!this.valorFinanciamento || !this.valorImovel)
      return;

    if (this.valorFinanciamento > (this.valorImovel * 0.9))
      this.valorFinanciamento = this.valorImovel * 0.9;
  }

  public calculo() {

    this.calculoService.calcular(this.valorFinanciamento, this.prazoFinanciamento, this.valorImovel).subscribe(value=>{
      if(value){
        this.router.navigateByUrl('/listagem');
      }
    });


  }

}
