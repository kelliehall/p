import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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

@Component({
    templateUrl: './flower-edit.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerEditComponent implements OnInit {
    flower$: Observable<Flower>;
    strains: Strain[] = [];
    grows: Grow[] = [];

    constructor(private route: ActivatedRoute,
        private growsService: GrowsService,
        private strainsService: StrainsService,
        private nutesSertice: NutesService,
        public notesDialog: MatDialog,
        private flowersService: FlowerService) {
    }

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params) => {
                return this.flowersService.getById(params['id'])
            }))
            .subscribe(flower => this.flower$ = flower);

        this.getStrains();
        this.getGrows();
    }

    getStrains() {
        this.strainsService.getStrains().subscribe(data => this.strains = data);
    }

    getGrows() {
        this.growsService.getGrows().subscribe(data => this.grows = data);
    }

    findStrain(id) {
        const strain = this.strains.find(strain => strain._id == id);
        return strain ? strain.name : '';
    }

    findGrow(id) {
        const grow = this.grows.find(grow => grow._id == id);
        return grow ? grow.name : '';
    }

    addNote() {
        const modal = this.notesDialog.open(NotesDialog);
        modal.afterClosed().subscribe(res => {
            console.log('todo');
        })

    }

}