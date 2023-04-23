import { NgModule } from '@angular/core';
import { EnergieMecaModuleRouting } from './energie_meca-routing.module';

import { ProtocoleComponent } from './protocole/protocole.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { ManipulationComponent } from './manipulation/manipulation.component';

@NgModule({
  declarations: [
    ProtocoleComponent,
    ConclusionComponent,
    InterpretationComponent,
    ManipulationComponent,
  ],
  imports: [
    EnergieMecaModuleRouting
  ],
  providers: [],
})
export class EnergieMecaModule { }
