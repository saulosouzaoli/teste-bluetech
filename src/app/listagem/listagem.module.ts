import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem.component';
import { ListagemRoutingModule } from './listagem.routing.module';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    ListagemRoutingModule,
    MatTableModule,
    MatCardModule,
    CommonModule
  ]
})
export class ListagemModule { }
