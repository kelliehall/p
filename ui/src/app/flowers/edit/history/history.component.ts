import { Component, Input } from '@angular/core';
import { Flower } from '../../flowers';
import { NutesService } from '../../../nutes/nutes.service';
import { Nute } from '../../../nutes/nutes';
import { FlowerService } from '../../flowers.service';
import * as lodash from 'lodash';

@Component({
    selector: 'history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.scss']
})

export class HistoryComponent {
    @Input() flower: Flower;
    nutes: Nute[];
    tableHeaders = [
        { name: 'date', class: 'col-sm-2' },
        { name: 'height', class: 'col-sm-2' },
        { name: 'note', class: 'col-sm-3' },
        { name: 'nutrients', class: 'col-sm-3' },
        { name: '', class: 'delete' }
    ];

    constructor(private nutesService: NutesService,
        private flowersService: FlowerService) {
        this.nutesService.nutes.subscribe(data => this.nutes = data);
    }

    getNutrient(id) {
        if (!this.nutes.length) {
            return 'Loading';
        } else {
            return this.nutes.find(nute => nute._id === id).name || 'Unknown';
        }
    }

    sortHistory(history) {
        return lodash.sortBy(history, (h) => h.date).reverse();
    }

    delete(id) {
        lodash.remove(this.flower.history, { '_id': id });
        this.flowersService.updatebyId(this.flower._id, this.flower).subscribe(() => {
            this.flowersService.updateFlowers();
        });
    }
}