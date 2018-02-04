import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrainsComponent } from './strains.component';
import { StrainsService } from './strains.service';
import { StrainRoutesModule } from './strains.routes.module';

@NgModule({
    declarations: [
        StrainsComponent
    ],
    imports: [
        CommonModule,
        StrainRoutesModule
    ],
    exports: [StrainsComponent],
    providers: [StrainsService],
})
export class StrainsModule { }