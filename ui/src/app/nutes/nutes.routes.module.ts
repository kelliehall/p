import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NutesComponent } from './nutes.component';

const routes = [
    { path: 'nutes', component: NutesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NuteRoutesModule { }
