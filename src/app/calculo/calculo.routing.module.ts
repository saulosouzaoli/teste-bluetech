import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculoComponent } from './calculo.component';


const routes: Routes = [
        { path: '', component: CalculoComponent }
    ];
    
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
export class CalculoRoutingModule { }