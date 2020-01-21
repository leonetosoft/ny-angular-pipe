
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'tel' })
export class TelPipe implements PipeTransform {

    transform(value: any) {
        if (value === undefined || value === null) {
            return '';
        }

        if (typeof value === 'number') {
            value = value.toString();
        }

        value = value.replace(/\D/g, '');
        if (value.length === 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else {
            value = value.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        return value;
    };
}