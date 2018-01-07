import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutesModule } from './nutes/nutes.module';

const routes: Routes = [
    { path: '', redirectTo: 'nutes', pathMatch: 'full' },
];

@NgModule({
    imports: [NutesModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule { }