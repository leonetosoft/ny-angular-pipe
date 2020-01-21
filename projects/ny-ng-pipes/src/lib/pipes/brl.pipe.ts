import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'brl' })
export class BrlPipe implements PipeTransform {

    transform(value: string, t = 'R$ ') {
        if (value === undefined || value === null) {
            return '';
        }
        return t + /*this.formatReal(parseFloat(value))*/this.numeroParaMoeda(value);
    }

    numeroParaMoeda(n, c = undefined, d = undefined, t = undefined) {
        c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t;
        let s = n < 0 ? "-" : ""; let i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "";
        let j;
        j = (j = i.length) > 3 ? j % 3 : 0;
        
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - parseFloat(i)).toFixed(c).slice(2) : "");
    }

    formatReal(int) {
        /*let tmp = int.toString().indexOf('.') !== -1 ? int + '' : int + '.00';
        let res = tmp.replace('.', '');
        tmp = res.replace(',', '');
        let neg = false;
        if (tmp.indexOf('-') === 0) {
            neg = true;
            tmp = tmp.replace('-', '');
        }
        if (tmp.length === 1) {
            tmp = '0' + tmp;
        }
        tmp = tmp.replace(/([0-9]{2})$/g, ',$1');
        if (tmp.length > 6) {
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
        }
        if (tmp.length > 9) {
            tmp = tmp.replace(/([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2,$3');
        }
        if (tmp.length > 12) {
            tmp = tmp.replace(/([0-9]{3}).([0-9]{3}).([0-9]{3}),([0-9]{2}$)/g, '.$1.$2.$3,$4');
        }
        if (tmp.indexOf('.') === 0) {
            tmp = tmp.replace('.', '');
        }
        if (tmp.indexOf(',') === 0) {
            tmp = tmp.replace(',', '0,');
        }
        return (neg ? '-' + tmp : tmp);*/
        var tmp = int + '';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6)
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return parseFloat(tmp).toFixed(2);
    }

}