import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoleComponent } from './protocole/protocole.component';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

const routes: Routes = [
    { path: '', redirectTo: 'interpretation', pathMatch: 'full' },
    { path: 'protocole', component: ProtocoleComponent },
    { path: 'manipulation', component: ManipulationComponent },
    { path: 'interpretation', component: InterpretationComponent },
    { path: 'conclusion', component: ConclusionComponent     },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnergieThermModuleRouting { }
