import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowersComponent } from './flowers.component';

const routes = [
    { path: 'flowers', component: FlowersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FlowerRoutesModule { }
