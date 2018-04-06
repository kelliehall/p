import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'year' })
export class YearPipe implements PipeTransform {
    transform(date: string){
        return moment(new Date(date)).local().format('MM/DD/YYYY');
    }
}

@Pipe({name: 'history'})
export class HistoryPipe implements PipeTransform {
    transform(date: string) {
        return moment(new Date(date)).local().format('MM/DD/YYYY hh:mm a');
    }
}