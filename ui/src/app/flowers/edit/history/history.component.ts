import { Component, Input } from '@angular/core';
import { Flower } from '../../flowers';
import { NutesService } from '../../../nutes/nutes.service';
import { Nute } from '../../../nutes/nutes';

@Component({
    selector: 'history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.scss']
})

export class HistoryComponent {
    @Input() flower: Flower;
    nutes: Nute[];
    tableHeaders = [
        { name: 'date', grid: 2 },
        { name: 'height', grid: 2 },
        { name: 'note', grid: 3 },
        { name: 'nutrients', grid: 3 }
    ];

    constructor(private nutesService: NutesService) {
        this.nutesService.getNutes().subscribe(data => this.nutes = data);
    }

    getNutrient(id) {
        return this.nutes.find(nute => nute._id === id).name || 'Unknown';
    }
}