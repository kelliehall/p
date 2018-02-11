import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerRoutesModule } from './flowers.routes.module';
import { FlowersComponent } from './flowers.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatDialogModule, MatSlideToggleModule, MatButtonModule, MatDatepickerModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { FlowerService } from './flowers.service';
import { FlowerDialog } from './modal/index';

@NgModule({
    entryComponents: [
        FlowerDialog
    ],
    declarations: [
        FlowersComponent,
        FlowerDialog
    ],
    imports: [
        CommonModule,
        FlowerRoutesModule,
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        MatDialogModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatDatepickerModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports: [FlowersComponent],
    providers: [FlowerService],
})
export class FlowerModule { }