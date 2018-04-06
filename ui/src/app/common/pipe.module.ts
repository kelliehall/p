import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearPipe, HistoryPipe } from './pipes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        YearPipe,
        HistoryPipe
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [
        YearPipe,
        HistoryPipe
    ],
    providers: [],
})
export class PipeModule { }