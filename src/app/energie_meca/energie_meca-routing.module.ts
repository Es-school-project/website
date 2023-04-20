import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtocoleComponent } from './protocole/protocole.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
const routes: Routes = [
    { path: '', redirectTo: 'protocole', pathMatch: 'full' },
    { path: 'protocole', component: ProtocoleComponent },
    { path: 'interpretation', component: InterpretationComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnergieMecaModuleRouting { }
