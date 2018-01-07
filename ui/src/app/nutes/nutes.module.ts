import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material';

import { NutesComponent } from './nutes.component';
import { NutesService } from './nutes.service';
import { NuteRoutesModule } from './nutes.routes.module';

@NgModule({
    declarations: [NutesComponent],
    imports: [CommonModule, NuteRoutesModule, MatInputModule],
    exports: [NutesComponent],
    providers: [NutesService],
})
export class NutesModule { }