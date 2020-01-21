
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'estadoCivil' })
export class EstadoCivilPipe implements PipeTransform {

    transform(value: any) {
        let ret = 'Não informado';
        switch (value) {
            case 0:
                ret = 'Casado(a)';
                break;

            case 2:
                ret = 'Divorciado(a)';
                break;

            case 6:
                ret = 'Desquitado(a)';
                break;

            case 1:
                ret = 'Solteiro(a)';
                break;

            case 4:
                ret = 'Separado(a)';
                break;

            case 5:
                ret = 'União Estável';
                break;

            case 3:
                ret = 'Viúvo(a)';
                break;
        }
        return ret;
    };
}