import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrainsComponent } from './strains.component';
import { StrainsService } from './strains.service';
import { StrainRoutesModule } from './strains.routes.module';
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';
import { StrainDialog } from './modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    entryComponents: [
        StrainDialog
    ],
    declarations: [
        StrainsComponent,
        StrainDialog
    ],
    imports: [
        CommonModule,
        StrainRoutesModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [StrainsComponent],
    providers: [StrainsService],
})
export class StrainsModule { }