import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'findage' })
export class FindAgePipe implements PipeTransform {
    now = moment();
    constructor() { }

    transform(start: string) {
        return moment(this.now).diff(start, 'days');
    }
}

