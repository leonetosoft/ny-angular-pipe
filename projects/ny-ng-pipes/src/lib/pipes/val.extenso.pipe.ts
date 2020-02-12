import { Pipe, PipeTransform } from '@angular/core';

class Cheque {
    valor = 0;

    constructor(valor) {
        this.valor = Number(Number(valor).toFixed(2));
    }

    palavras = {
        1: 'um',
        2: 'dois',
        3: 'tres',
        4: 'quatro',
        5: 'cinco',
        6: 'seis',
        7: 'sete',
        8: 'oito',
        9: 'nove',
        10: 'dez',
        11: 'onze',
        12: 'doze',
        13: 'treze',
        14: 'quatorze',
        15: 'quinze',
        16: 'dezesseis',
        17: 'dezessete',
        18: 'dezoito',
        19: 'dezenove',
        20: 'vinte',
        30: 'trinta',
        40: 'quarenta',
        50: 'cinquenta',
        60: 'sessenta',
        70: 'setenta',
        80: 'oitenta',
        90: 'noventa',
        100: 'cento',
        200: 'duzentos',
        300: 'trezentos',
        400: 'quatrocentos',
        500: 'quinhentos',
        600: 'seicentos',
        700: 'setecentos',
        800: 'oitocentos',
        900: 'novecentos'
    };

    // fim de coisa de javeiro
    humanizedDezena(value) {
        if (value <= 20 || (value % 10) === 0) {
            return this.palavras[parseInt(value)];
        }

        var parteUnidade = value % 10;
        var parteDezena = value - parteUnidade;

        var humanizedUnidade = this.palavras[parseInt(String(parteUnidade))];
        var humanizedDezena = this.palavras[parseInt(String(parteDezena))];

        return humanizedDezena + ' e ' + humanizedUnidade;
    };

    humanizedCentena(value) {
        var parteDezena = value % 100;
        var parteCentena = value - parteDezena;

        if (value === 100 && parteDezena === 0) {
            return 'cem';
        }

        return this.palavras[parseInt(String(parteCentena))] + ' e ' + this.humanizedDezena(parteDezena);
    };

    convertToExtensive(value) {
        value = parseInt(value);
        var tamanho = (value + '').length;

        if (tamanho <= 2) {
            return this.humanizedDezena(value);
        }

        if (tamanho === 3) {
            return this.humanizedCentena(value);
        }

        if (tamanho >= 4) {
            var parteMilhar = value / 1000;
            var parteCentena = value % 1000;

            var humanizedMilhar = (parteMilhar !== 1) ? (this.convertToExtensive(parteMilhar) + 'mil') : 'mil';

            if (parteCentena > 0) {
                return humanizedMilhar + ', ' + this.humanizedCentena(parteCentena);
            }

            return humanizedMilhar;
        }
    };

    ajuste(nr, casas) {
        const og = Math.pow(10, casas)
        return Math.floor(nr * og) / og;
    }

    fracionada(f) {
        //return String((f - Math.floor(f)) * 100);
        return Math.round((f - Math.floor(f)) * 100);
    };


    humanize() {
        var valor = this.valor;
        var parteInteira = Math.floor(valor);
        var reais = (parteInteira > 0) ? ((this.convertToExtensive(parteInteira) + ((parteInteira !== 1) ? ' reais' : ' real'))) : '';
        var parteFracionaria = this.fracionada(this.valor);
        var cents = this.convertToExtensive(parteFracionaria) + ' centavos';
        var centavos = (parteFracionaria > 0) ? ((parteInteira > 0) ? ' e ' : '') + cents : '';
        return reais + centavos;
    };

}

@Pipe({ name: 'extenso' })
export class ValExtensoPipe implements PipeTransform {

    transform(value: string) {
        if (value === undefined || value === null) {
            return '';
        }
        let cheque = new Cheque(value);

        return cheque.humanize();
    }

}