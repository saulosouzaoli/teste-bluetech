import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'calculo', pathMatch: 'full'},
  {path: 'calculo', loadChildren: './calculo/calculo.module#CalculoModule'},
  {path: 'listagem', loadChildren: './listagem/listagem.module#ListagemModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
