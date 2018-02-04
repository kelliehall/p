import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatDialogModule, MatSlideToggleModule, MatButtonModule } from '@angular/material';

import { NutesComponent } from './nutes.component';
import { NutesService } from './nutes.service';
import { NuteRoutesModule } from './nutes.routes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NuteDialog } from './modal';

@NgModule({
    entryComponents: [
        NuteDialog
    ],
    declarations: [
        NutesComponent,
        NuteDialog,
    ],
    imports: [
        CommonModule,
        NuteRoutesModule,
        MatInputModule,
        MatDialogModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule
    ],
    exports: [NutesComponent],
    providers: [NutesService],
})
export class NutesModule { }
