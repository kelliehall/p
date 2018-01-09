import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'year' })
export class YearPipe implements PipeTransform {
    transform(date: string): any {
        return moment(new Date(date)).local().format('MM/DD/YYYY');
    }
}