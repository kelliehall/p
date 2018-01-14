import { Component } from '@angular/core';
import { Grow } from './grow';
import { GrowsService } from './grows.service';
import { MatDialog } from '@angular/material';
import { GrowDialog } from './modal/index';

@Component({
    templateUrl: './grows.component.html',
    styleUrls: ['./grows.scss']
})
export class GrowsComponent {
    grows: Grow[];

    constructor(private growService: GrowsService,
        public growDialog: MatDialog) {
        this.getGrows();
    }

    getGrows() {
        this.growService.getGrows().subscribe(data => this.grows = data);
    }

    addGrow() {
        const modal = this.growDialog.open(GrowDialog);
        modal.afterClosed().subscribe(res => {
            this.getGrows();
        });
    }

    delete(grow: Grow) {
        this.growService.deleteGrow(grow).subscribe(() => {
            this.getGrows();
        });
    }

}
