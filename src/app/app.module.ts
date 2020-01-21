import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrlPipe } from './pipes/brl.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { DatexPipe } from './pipes/date.pipe';
import { EstadoCivilPipe } from './pipes/estado.civil.pipe';
import { FixedPipe } from './pipes/fixed.pipe';
import { FlattenPipe } from './pipes/flatten.pipe';
import { PtCalendarPipe } from './pipes/pt.format.date.pipe';
import { TelPipe } from './pipes/tel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BrlPipe,
    CepPipe,
    CnpjPipe,
    CpfPipe,
    DatexPipe,
    EstadoCivilPipe,
    FixedPipe,
    FlattenPipe,
    PtCalendarPipe,
    TelPipe
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BrlPipe,
    CepPipe,
    CnpjPipe,
    CpfPipe,
    DatexPipe,
    EstadoCivilPipe,
    FixedPipe,
    FlattenPipe,
    PtCalendarPipe,
    TelPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class NyAngularPipeModule { }
