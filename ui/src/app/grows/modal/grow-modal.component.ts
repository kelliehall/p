import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms/';
import { GrowsService } from '../grows.service';
import { MatDialog } from '@angular/material';
import * as moment from 'moment';

@Component({
    templateUrl: './grow-modal.component.html',
    styleUrls: ['../grows.scss']
})
export class GrowDialog implements OnInit {
    growForm: FormGroup;

    constructor(private fb: FormBuilder,
        private growsService: GrowsService,
        public growDialog: MatDialog) { }

    ngOnInit() {
        this.growForm = this.fb.group({
            name: new FormControl('', Validators.required),
            flowers: new FormArray([]),
            cycle: new FormControl(''),
            start: new FormControl(moment(), Validators.required),
            end: new FormControl(''),
            nutrients: new FormArray([]),
            notes: new FormArray([]),
            status: new FormControl('')
        });
    }

    save() {
        this.growsService.createGrow(this.growForm.getRawValue()).subscribe((data) => {
            this.growsService.updateGrows();
            this.growDialog.closeAll()
        });
    }
}