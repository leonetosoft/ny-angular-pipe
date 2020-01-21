import { NgModule } from '@angular/core';
import { NyNgPipesComponent } from './ny-ng-pipes.component';
import { BrlPipe } from './pipes/brl.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { EstadoCivilPipe } from './pipes/estado.civil.pipe';
import { DatexPipe } from './pipes/date.pipe';
import { FixedPipe } from './pipes/fixed.pipe';
import { FlattenPipe } from './pipes/flatten.pipe';
import { PtCalendarPipe } from './pipes/pt.format.date.pipe';
import { TelPipe } from './pipes/tel.pipe';

@NgModule({
  imports: [
  ],
  declarations: [NyNgPipesComponent, BrlPipe,
    CepPipe,
    CnpjPipe,
    CpfPipe,
    DatexPipe,
    EstadoCivilPipe,
    FixedPipe,
    FlattenPipe,
    PtCalendarPipe,
    TelPipe],
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
  ]
})
export class NyNgPipesModule { }
