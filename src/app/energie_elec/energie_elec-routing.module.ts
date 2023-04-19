import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtocleComponent } from './protocle/protocle.component';

const routes: Routes = [
    { path: '', redirectTo: 'protocole', pathMatch: 'full' },
    { path: 'protocole', component: ProtocleComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnergieElecModuleRouting { }
