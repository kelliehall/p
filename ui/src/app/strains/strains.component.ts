import { Component } from '@angular/core';
import { Strain } from './strains';
import { StrainsService } from './strains.service';
import { StrainDialog } from './modal';
import { MatDialog } from '@angular/material';

@Component({
    templateUrl: './strains.component.html',
    styleUrls: ['./strains.scss']
})
export class StrainsComponent {
    strains: Strain[];

    constructor(private strainsService: StrainsService,
        public strainDialog: MatDialog) {
        this.strainsService.strains.subscribe(data => this.strains = data);
    }

    addStrain() {
        const modal = this.strainDialog.open(StrainDialog);
        modal.afterClosed().subscribe(res => {
            this.strainsService.updateStrains();
        });
    }

    delete(strain: Strain) {
        this.strainsService.deleteStrain(strain).subscribe(() => {
            this.strainsService.updateStrains();
        });
    }
}