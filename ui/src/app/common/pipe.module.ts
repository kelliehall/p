import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearPipe } from './pipes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [YearPipe],
    imports: [CommonModule, BrowserModule],
    exports: [YearPipe],
    providers: [],
})
export class PipeModule { }