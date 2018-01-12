import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutesModule } from './nutes/nutes.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [NutesModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule { }