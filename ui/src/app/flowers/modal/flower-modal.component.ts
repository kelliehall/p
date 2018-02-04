import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { FlowerService } from '../flowers.service';
import * as moment from 'moment';

@Component({
    templateUrl: './flower-modal.component.html',
    styleUrls: ['../flowers.scss']
})
export class FlowerDialog implements OnInit {
    flowerForm: FormGroup;

    constructor(private fb: FormBuilder,
        private flowerService: FlowerService,
        public flowerDialog: MatDialog) { }

    ngOnInit() {
        this.flowerForm = this.fb.group({
            strain: new FormControl('', Validators.required),

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