import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NutesService } from './nutes.service';
import { Nute } from './nutes';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';

@Component({
    templateUrl: './nutes.component.html',
    styleUrls: ['./nutes.scss']
})
export class NutesComponent implements OnInit {
    nutes: Nute[];

    constructor(private nuteService: NutesService,
        public nuteDialog: MatDialog) {
        this.nuteService.getNutes().subscribe(data => this.nutes = data);
    }

    ngOnInit() {
    }

    addNute() {
        this.nuteDialog.open(NuteDialog);
    }
}

@Component({
    templateUrl: './nute.dialog.html',
    styleUrls: ['./nutes.scss']
})
export class NuteDialog {

}
