import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowDialog } from './modal';
import { GrowsComponent } from './grows.component';
import { GrowsRoutesModule } from './grows.routes.module';
import { MatInputModule, MatDialogModule, MatSlideToggleModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GrowsService } from './grows.service';
import { PipeModule } from '../common/pipe.module';

@NgModule({
    entryComponents: [GrowDialog],
    declarations: [
        GrowsComponent,
        GrowDialog,
    ],
    imports: [
        CommonModule,
        GrowsRoutesModule,
        MatInputModule,
        MatDialogModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatDatepickerModule,
        PipeModule
    ],
    exports: [GrowsComponent],
    providers: [GrowsService],
})
export class GrowsModule { }