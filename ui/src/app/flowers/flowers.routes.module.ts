import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowersComponent } from './flowers.component';
import { FlowerEditComponent } from './edit/flower-edit.component';

const routes = [
    { path: 'flowers', component: FlowersComponent },
    { path: 'flowers/:id', component: FlowerEditComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FlowerRoutesModule { }
