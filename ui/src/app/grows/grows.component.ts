import { Component, OnInit } from '@angular/core';
import { Grow } from './grow';
import { GrowsService } from './grows.service';
import { MatDialog } from '@angular/material';
import { GrowDialog } from './modal/index';
import { FlowerService } from '../flowers/flowers.service';
import { Flower } from '../flowers/flowers';

@Component({
    templateUrl: './grows.component.html',
    styleUrls: ['./grows.scss']
})
export class GrowsComponent implements OnInit {
    grows: Grow[];
    flowers: Flower[];

    constructor(private growService: GrowsService,
        public flowerService: FlowerService,
        public growDialog: MatDialog) {
    }

    ngOnInit() {
        this.getGrows();
        this.getFlowers();
    }

    getGrows() {
        this.growService.getGrows().subscribe(data => {
            this.grows = data
        });
    }

    getFlowers() {
        this.flowerService.getFlowers().subscribe(data => this.flowers = data);
    }

    addGrow() {
        const modal = this.growDialog.open(GrowDialog, {
            data: {
                flowerService: FlowerService
            }
        });
        modal.afterClosed().subscribe(res => {
            this.growService.updateGrows();
        });
    }

    delete(grow: Grow) {
        this.growService.deleteGrow(grow).subscribe(() => {
            this.getGrows();
        });
    }

}
