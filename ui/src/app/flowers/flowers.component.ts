import { Component, OnInit } from '@angular/core';
import { Flower } from './flowers';
import { FlowerService } from './flowers.service';
import { MatDialog } from '@angular/material';
import { FlowerDialog } from './modal/index';

@Component({
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.scss']
})
export class FlowersComponent implements OnInit {
    flowers: Flower[];

    constructor(private flowerService: FlowerService,
        public flowerDialog: MatDialog) {
    }

    ngOnInit() {
        this.getFlowers();
    }

    getFlowers() {
        this.flowerService.getFlowers().subscribe(data => this.flowers = data);
    }

    addFlower() {
        const modal = this.flowerDialog.open(FlowerDialog);
        modal.afterClosed().subscribe(res => {
            this.getFlowers();
        });
    }

    delete(flower: Flower) {
        this.flowerService.deleteFlower(flower).subscribe(() => {
            this.getFlowers();
        });
    }
}
