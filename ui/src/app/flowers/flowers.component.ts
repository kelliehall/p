import { Component } from '@angular/core';
import { Flower } from './flowers';
import { FlowerService } from './flowers.service';
import { MatDialog } from '@angular/material';
import { FlowerDialog } from './modal';
import { StrainsService } from '../strains/strains.service';
import { Strain } from '../strains/strains';
import { GrowsService } from '../grows/grows.service';
import { Grow } from '../grows/grow';

@Component({
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.scss']
})
export class FlowersComponent {
    flowers: Flower[] = [];
    strains: Strain[] = [];
    grows: Grow[] = [];

    constructor(private flowersService: FlowerService,
        private strainsService: StrainsService,
        private growsService: GrowsService,
        public flowerDialog: MatDialog) {
        this.flowersService.flowers.subscribe(data => this.flowers = data);
        this.strainsService.strains.subscribe(data => this.strains = data);
        this.growsService.grows.subscribe(data => this.grows = data);
    }

    addFlower() {
        const modal = this.flowerDialog.open(FlowerDialog, { data: { strains: this.strains, grows: this.grows } });
        modal.afterClosed().subscribe(res => {
            this.flowersService.updateFlowers();
        });
    }

    delete(flower: Flower) {
        this.flowersService.deleteFlower(flower).subscribe(() => {
            this.flowersService.updateFlowers();
        });
    }

    findStrain(id) {
        const strain = this.strains.find(strain => strain._id == id);
        return strain ? strain.name : '';
    }

    findGrow(id) {
        const grow = this.grows.find(grow => grow._id == id);
        return grow ? grow.name : '';
    }
}
