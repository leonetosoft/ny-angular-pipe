import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({ name: 'datex' })
export class DatexPipe implements PipeTransform {
    transform(value: any, format: string = "", time: boolean = false): string {
        if (!value) {
            return;
        }
        if (time) {
            const vals = value.split(':');
            return moment().set('hour', Number(vals[0])).set('minute', Number(vals[2])).set('second', 0).format(format);
        }
        return moment(value).isValid() ? moment(value).format(format) : value;
    }
}
