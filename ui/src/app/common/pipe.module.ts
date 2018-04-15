import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearPipe, HistoryPipe } from './pipes';
import { BrowserModule } from '@angular/platform-browser';
import { FindAgePipe } from './find';

const pipes = [YearPipe, HistoryPipe, FindAgePipe];

@NgModule({
    declarations: [...pipes],
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [...pipes],
    providers: [],
})
export class PipeModule { }