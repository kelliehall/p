import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrainsComponent } from './strains.component';
import { StrainsService } from './strains.service';
import { StrainRoutesModule } from './strains.routes.module';
import { MatDialogModule } from '@angular/material';
import { StrainDialog } from './modal/index';

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
        MatDialogModule
    ],
    exports: [StrainsComponent],
    providers: [StrainsService],
})
export class StrainsModule { }