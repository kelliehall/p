import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StrainsComponent } from "./strains.component";

const routes = [
    { path: 'strains', component: StrainsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StrainRoutesModule { }