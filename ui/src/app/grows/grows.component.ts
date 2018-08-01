import { Component } from '@angular/core';
import { Grow } from './grow';
import { GrowsService } from './grows.service';
import { MatDialog } from '@angular/material';
import { GrowDialog } from './modal';
import { FlowerService } from '../flowers/flowers.service';
import { Flower } from '../flowers/flowers';

@Component({
    templateUrl: './grows.component.html',
    styleUrls: ['./grows.scss']
})
export class GrowsComponent {
    grows: Grow[];
    flowers: Flower[];

    constructor(private growsService: GrowsService,
        public flowersService: FlowerService,
        public growDialog: MatDialog) {
        this.growsService.grows.subscribe(data => this.grows = data);
        this.flowersService.flowers.subscribe(data => this.flowers = data);
    }

    addGrow() {
        const modal = this.growDialog.open(GrowDialog, {
            data: {
                flowersService: FlowerService
            }
        });
        modal.afterClosed().subscribe(res => {
            this.growsService.updateGrows();
        });
    }

    delete(grow: Grow) {
        this.growsService.deleteGrow(grow).subscribe(() => {
            this.growsService.updateGrows();
        });
    }

}
