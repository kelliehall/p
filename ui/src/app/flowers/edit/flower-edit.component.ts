import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Flower } from '../flowers';
import { FlowerService } from '../flowers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { GrowsService } from '../../grows/grows.service';
import { StrainsService } from '../../strains/strains.service';
import { NutesService } from '../../nutes/nutes.service';
import { Grow } from '../../grows/grow';
import { Strain } from '../../strains/strains';
import { MatDialog } from '@angular/material';
import { NotesDialog } from './notes';
import { Nute } from '../../nutes/nutes';

@Component({
    templateUrl: './flower-edit.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerEditComponent implements OnInit {
    flower$: Observable<Flower>;
    strains: Strain[] = [];
    grows: Grow[] = [];
    nutes: Nute[] = [];

    constructor(private route: ActivatedRoute,
        private growsService: GrowsService,
        private strainsService: StrainsService,
        private nutesService: NutesService,
        public notesDialog: MatDialog,
        private flowersService: FlowerService) {
        this.strainsService.strains.subscribe(data => this.strains = data);
        this.growsService.grows.subscribe(data => this.grows = data);
        this.nutesService.nutes.subscribe(data => this.nutes = data);
    }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => {
                return this.flowersService.getById(params['id'])
            }))
            .subscribe(flower => this.flower$ = flower);

    }

    findStrain(id) {
        const strain = this.strains.find(strain => strain._id == id);
        return strain ? strain.name : '';
    }

    findGrow(id) {
        const grow = this.grows.find(grow => grow._id == id);
        return grow ? grow.name : '';
    }

    harvestedFlower() {
        console.log(this.flower$);
    }

    addNote() {
        const modal = this.notesDialog.open(NotesDialog, { data: { flower: this.flower$, nutes: this.nutes } });
        modal.afterClosed().subscribe(res => {
            console.log('todo');
        })

    }

}