import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { FlowerService } from '../flowers.service';

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
            identifier: new FormControl('', Validators.required),
            strain: new FormControl('', Validators.required)
        });
    }

    save() {
        this.flowerService.createFlower(this.flowerForm.getRawValue()).subscribe(data => {
            this.flowerDialog.closeAll();
        });
    }
}