import { Component, OnInit } from '@angular/core';
import { Strain } from './strains';
import { StrainsService } from './strains.service';
import { StrainDialog } from './modal/index';
import { MatDialog } from '@angular/material';

@Component({
    templateUrl: './strains.component.html',
    styleUrls: ['./strains.scss']
})
export class StrainsComponent implements OnInit {
    strains: Strain[];

    constructor(private strainsService: StrainsService,
        public strainDialog: MatDialog) { }

    ngOnInit() {
        this.getStrains();
    }

    getStrains() {
        this.strainsService.getStrains().subscribe(data => this.strains = data);
    }

    addStrain() {
        const modal = this.strainDialog.open(StrainDialog);
        modal.afterClosed().subscribe(res => {
            this.getStrains();
        });
    }

    delete(strain: Strain) {
        this.strainsService.deleteStrain(strain).subscribe(() => {
            this.getStrains();
        });
    }
}