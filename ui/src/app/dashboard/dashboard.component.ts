import { Component, OnDestroy } from '@angular/core';
import { FlowerService } from '../flowers/flowers.service';
import { StrainsService } from '../strains/strains.service';
import { GrowsService } from '../grows/grows.service';
import { Flower } from '../flowers/flowers';
import { Strain } from '../strains/strains';
import { Grow } from '../grows/grow';
import { NutesService } from '../nutes/nutes.service';
import { Nute } from '../nutes/nutes';
import { Observable, Subscription } from '../../../node_modules/rxjs';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.scss']
})
export class DashboardComponent implements OnDestroy {
    flowers: Flower[] = [];
    strains: Strain[] = [];
    grows: Grow[] = [];
    nutes: Nute[] = [];

    info$: Subscription;

    constructor(private flowersService: FlowerService,
        private strainsService: StrainsService,
        private growsService: GrowsService,
        private nutesService: NutesService) {
        this.info$ = this.flowersService.flowers.subscribe(data => this.flowers = data);
        this.info$.add(this.strainsService.strains.subscribe(data => this.strains = data));
        this.info$.add(this.growsService.grows.subscribe(data => this.grows = data));
        this.info$.add(this.nutesService.nutes.subscribe(data => this.nutes = data));
    }

    ngOnDestroy() {
        this.info$.unsubscribe();
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