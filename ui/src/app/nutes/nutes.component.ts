import { Component } from '@angular/core';
import { NutesService } from './nutes.service';
import { Nute } from './nutes';
import { MatDialog } from '@angular/material';
import { NuteDialog } from './modal';

@Component({
    templateUrl: './nutes.component.html',
    styleUrls: ['./nutes.scss']
})
export class NutesComponent {
    nutes: Nute[];

    constructor(private nuteService: NutesService,
        public nuteDialog: MatDialog) {
        this.nuteService.nutes.subscribe(data => this.nutes = data);
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
