import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    templateUrl: './nutes.component.html',
    styleUrls: ['./nutes.scss']
})
export class NutesComponent implements OnInit {
    time;

    constructor() { }

    ngOnInit() {
        this.time = moment();
    }
}