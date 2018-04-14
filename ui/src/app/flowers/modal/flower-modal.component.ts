import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { FlowerService } from '../flowers.service';
import { Strain } from '../../strains/strains';
import { Grow } from '../../grows/grow';
import * as moment from 'moment';

@Component({
    templateUrl: './flower-modal.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerDialog implements OnInit {
    flowerForm: FormGroup;
    strains: Strain[];
    grows: Grow[];

    constructor(private fb: FormBuilder,
        private flowersService: FlowerService,
        @Inject(MAT_DIALOG_DATA) public data: { strains: Strain[], grows: Grow[] },
        public flowerDialog: MatDialog) {
        this.strains = data.strains;
        this.grows = data.grows;
    }

    ngOnInit() {
        this.flowerForm = this.fb.group({
            strain: new FormControl('', Validators.required),
            identifier: new FormControl('', Validators.required),

            planted: new FormControl(moment(), Validators.required),
            harvested: new FormControl(''),
            yield: new FormControl(''),

            grow: new FormControl(''),

            mother: new FormControl(false),
            children: new FormControl(),
            clone: new FormControl(false),
            cloneStart: new FormControl(),

            notes: new FormArray([]),
        });
    }

    save() {
        this.flowersService.createFlower(this.flowerForm.getRawValue()).subscribe(data => {
            this.flowersService.updateFlowers();
            this.flowerDialog.closeAll();
        });
    }
}