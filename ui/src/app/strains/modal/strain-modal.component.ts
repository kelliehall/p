import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { StrainsService } from '../strains.service';
import { MatDialog } from '@angular/material';

@Component({
    templateUrl: './strain-modal.component.html',
    styleUrls: ['../strains.scss']
})
export class StrainDialog implements OnInit {
    strainForm: FormGroup;

    constructor(private fb: FormBuilder,
        private strainsService: StrainsService,
        public strainDialog: MatDialog) { }

    ngOnInit() {
        this.strainForm = this.fb.group({
            name: new FormControl('', Validators.required),
            breeder: new FormControl('', Validators.required),
            genetics: new FormControl(),
            source: new FormControl(),
            notes: new FormArray([])
        });
    }
}