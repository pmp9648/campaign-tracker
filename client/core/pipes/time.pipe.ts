import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {
    transform(value: number) {
        if (!value || value === 0) return '0';
        var units = {
            "year": 24 * 60 * 365,
            "month": 24 * 60 * 30,
            "day": 24 * 60,
            "hour": 60,
            "minute": 1,
        }
        var result = [];
        for (var name in units) {
            var p = Math.floor(value / units[name]);
            if (p == 1) result.push(" " + p + " " + name);
            if (p >= 2) result.push(" " + p + " " + name + "s");
            value %= units[name]
        }

        return result;
    }
}
