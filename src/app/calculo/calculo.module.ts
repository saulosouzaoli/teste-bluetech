import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoComponent } from './calculo.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button'; 
import { CalculoRoutingModule } from './calculo.routing.module';


@NgModule({
  declarations: [
    CalculoComponent],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CalculoRoutingModule,
    CommonModule
  ]
})
export class CalculoModule { }
