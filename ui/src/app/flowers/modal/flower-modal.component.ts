import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { FlowerService } from '../flowers.service';
import { Strain } from '../../strains/strains';
import * as moment from 'moment';

@Component({
    templateUrl: './flower-modal.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerDialog implements OnInit {
    flowerForm: FormGroup;
    strains: Strain[] = [];

    constructor(private fb: FormBuilder,
        private flowerService: FlowerService,
        @Inject(MAT_DIALOG_DATA) public data: { strains: Strain[] },
        public flowerDialog: MatDialog) {
        this.strains = data.strains;
    }

    ngOnInit() {
        this.flowerForm = this.fb.group({
            strain: new FormControl('', Validators.required),
            identifier: new FormControl(''),

            planted: new FormControl(moment(), Validators.required),
            end: new FormControl(''),
            yield: new FormControl(''),

            grow: new FormControl(),

            mother: new FormControl(false),
            children: new FormControl(),
            clone: new FormControl(false),
            cloneStart: new FormControl(),

            notes: new FormArray([]),
        });
    }

    save() {
        this.flowerService.createFlower(this.flowerForm.getRawValue()).subscribe(data => {
            this.flowerDialog.closeAll();
        });
    }
}