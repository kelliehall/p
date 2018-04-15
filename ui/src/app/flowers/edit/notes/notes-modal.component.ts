import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { FlowerService } from '../../flowers.service';
import { Flower } from '../../flowers';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { Nute } from '../../../nutes/nutes';

@Component({
    templateUrl: './notes-modal.component.html',
    styleUrls: ['./notes.scss']
})
export class NotesDialog implements OnInit {
    notesForm: FormGroup;
    flower: Flower;
    nutes: Nute[];

    constructor(private fb: FormBuilder,
        private flowersService: FlowerService,
        @Inject(MAT_DIALOG_DATA) public data: { flower: Flower, nutes: Nute[] },
        public notesDialog: MatDialog) {
        this.flower = data.flower;
        this.nutes = data.nutes;
    }

    get watered() {
        return this.notesForm.get('watered') as FormControl;
    }

    get nutrients() {
        return this.notesForm.get('nutrients') as FormArray;
    }

    ngOnInit() {
        this.notesForm = this.fb.group({
            note: new FormControl(''),
            date: new FormControl(moment(), Validators.required),
            nutrients: new FormArray([]),
            transplanted: new FormControl(false),
            defeciencys: new FormControl(''),
            flowered: new FormControl(false),
            flushed: new FormControl(false),
            watered: new FormControl(false),
            phIn: new FormControl(null),
            phOut: new FormControl(null),
            ppmIn: new FormControl(null),
            ppmOut: new FormControl(null),
            height: new FormControl(null)
        });
    }

    newNute() {
        this.nutrients.push(
            this.fb.group({
                name: new FormControl(null),
                amount: new FormControl(null)
            })
        );
    }

    save() {
        this.flower.history.push(this.notesForm.getRawValue());
        this.flowersService.updatebyId(this.flower._id, this.flower).subscribe(() => {
            this.flowersService.updateFlowers();
            this.notesDialog.closeAll();
        });
    }

}