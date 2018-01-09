import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatDialogModule } from '@angular/material';

import { NutesComponent, NuteDialog } from './nutes.component';
import { NutesService } from './nutes.service';
import { NuteRoutesModule } from './nutes.routes.module';

@NgModule({
    entryComponents: [
        NuteDialog
    ],
    declarations: [
        NutesComponent,
        NuteDialog
    ],
    imports: [
        CommonModule,
        NuteRoutesModule,
        MatInputModule,
        MatDialogModule
    ],
    exports: [NutesComponent],
    providers: [NutesService],
})
export class NutesModule { }
