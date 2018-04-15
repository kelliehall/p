import { Component } from '@angular/core';
import { FlowerService } from '../flowers/flowers.service';
import { StrainsService } from '../strains/strains.service';
import { GrowsService } from '../grows/grows.service';
import { Flower } from '../flowers/flowers';
import { Strain } from '../strains/strains';
import { Grow } from '../grows/grow';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
    flowers: Flower[] = [];
    strains: Strain[] = [];
    grows: Grow[] = [];

    constructor(private flowersService: FlowerService,
        private strainsService: StrainsService,
        private growsService: GrowsService) {
        this.getFlowers();
        this.getStrains();
        this.getGrows();
    }

    getFlowers() {
        this.flowersService.getFlowers().subscribe(data => this.flowers = data);
    }

    getStrains() {
        this.strainsService.getStrains().subscribe(data => this.strains = data);
    }

    getGrows() {
        this.growsService.getGrows().subscribe(data => this.grows = data);
    }

    findStrain(id) {
        if (!this.strains.length) {
            return null;
        } else {
            return this.strains.find(strain => strain._id === id).name || 'Unknown';
        }
    }

    findGrow(id) {
        if (!this.grows.length) {
            return null;
        } else {
            return this.grows.find(grow => grow._id === id).name || 'Unknown';
        }
    }

}