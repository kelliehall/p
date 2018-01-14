import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutesModule } from './nutes/nutes.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlowerModule } from './flowers/flowers.module';
import { GrowsModule } from './grows/grows.module';

const routes: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        NutesModule,
        RouterModule.forRoot(routes),
        FlowerModule,
        GrowsModule
    ],
    exports: [RouterModule],
})
export class AppRoutesModule { }