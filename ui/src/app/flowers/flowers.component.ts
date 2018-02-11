import { Component, OnInit } from '@angular/core';
import { Flower } from './flowers';
import { FlowerService } from './flowers.service';
import { MatDialog } from '@angular/material';
import { FlowerDialog } from './modal/index';
import { StrainsService } from '../strains/strains.service';
import { Strain } from '../strains/strains';
import { GrowsService } from '../grows/grows.service';
import { Grow } from '../grows/grow';

@Component({
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.scss']
})
export class FlowersComponent implements OnInit {
    flowers: Flower[] = [];
    strains: Strain[] = [];
    grows: Grow[] = [];

    constructor(private flowerService: FlowerService,
        private strainService: StrainsService,
        private growService: GrowsService,
        public flowerDialog: MatDialog) {
    }

    ngOnInit() {
        this.getFlowers();
        this.getStrains();
        this.getGrows();
    }

    getFlowers() {
        this.flowerService.getFlowers().subscribe(data => this.flowers = data);
    }

    getStrains() {
        this.strainService.getStrains().subscribe(data => this.strains = data);
    }

    getGrows() {
        this.growService.getGrows().subscribe(data => this.grows = data);
    }

    addFlower() {
        const modal = this.flowerDialog.open(FlowerDialog, { data: { strains: this.strains, grows: this.grows } });
        modal.afterClosed().subscribe(res => {
            this.getFlowers();
        });
    }

    delete(flower: Flower) {
        this.flowerService.deleteFlower(flower).subscribe(() => {
            this.getFlowers();
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
