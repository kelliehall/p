import { Component, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NutesService } from './nutes.service';
import { Nute } from './nutes';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { NuteDialog } from './modal';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
    templateUrl: './nutes.component.html',
    styleUrls: ['./nutes.scss']
})
export class NutesComponent implements OnInit {
    nutes: Nute[];

    constructor(private nuteService: NutesService,
        public nuteDialog: MatDialog) {
    }

    ngOnInit() {
        this.getNutes();
    }

    getNutes() {
        this.nuteService.getNutes().subscribe(data => this.nutes = data);
    }

    addNute() {
        const modal = this.nuteDialog.open(NuteDialog);
        modal.afterClosed().subscribe(res => {
            this.nuteService.updateNutes();
        });
    }

    delete(nute: Nute) {
        this.nuteService.deleteNute(nute).subscribe(() => {
            this.nuteService.updateNutes();
        });
    }
}
