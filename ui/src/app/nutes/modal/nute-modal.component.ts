import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { NutesService } from '../nutes.service';
import { NutesComponent } from '../nutes.component';
import { MatDialog } from '@angular/material';

@Component({
    templateUrl: './nute-modal.component.html',
    styleUrls: ['../nutes.scss']
})
export class NuteDialog implements OnInit {
    nuteForm: FormGroup;

    constructor(private fb: FormBuilder,
        private nuteService: NutesService,
        public nuteDialog: MatDialog) { }

    ngOnInit() {
        this.nuteForm = this.fb.group({
            name: new FormControl('', Validators.required),
            need: new FormControl(false, Validators.required),
            htg: new FormArray([]),
            amzn: new FormArray([]),
            tracking: new FormControl(),
            image: new FormControl()
        });
    }

    save() {
        this.nuteService.createNute(this.nuteForm.getRawValue()).subscribe(data => {
            this.nuteService.updateNutes();
            this.nuteDialog.closeAll();
        });
    }
}