import { NgModule, ModuleWithProviders } from '@angular/core';
import { ParcelamentoService } from './Parcelamento.service';
import { CommonModule } from '@angular/common';


@NgModule({imports:[CommonModule]})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ParcelamentoService]
    };
  }
}