
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fixed' })
export class FixedPipe implements PipeTransform {

    transform(value: number, qtde: number) {
        if (value === undefined || value === null || qtde === undefined) {
            return '';
        }
        return value.toFixed(qtde);
    }

    isInt(n) {
        return Number(n) === n && n % 1 === 0;
    }

    isFloat(n) {
        return Number(n) === n && n % 1 !== 0;
    }
}