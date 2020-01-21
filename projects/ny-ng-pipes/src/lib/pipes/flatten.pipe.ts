
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'flatten' })
export class FlattenPipe implements PipeTransform {

    transform(value: any) {
        if (!value) {
            return value;
        }

        if (value instanceof Array) {
            for (let t in value) {
                value[t] = this.flatten(value[t]);
            }
            return value;
        } 

        return this.flatten(value);
    };

    getType(obj) {
        return Object.prototype.toString.call(obj);
    }

    flatten(obj, path = '') {
        if (!(obj instanceof Object)) return { [path.replace(/\_$/g, '')]: obj };

        return Object.keys(obj).reduce((output, key) => {
            return obj instanceof Array ?
                { ...output, ...this.flatten(obj[key], path + '[' + key + '].') } :
                { ...output, ...this.flatten(obj[key], path + key + '_') };
        }, {});
    }


}