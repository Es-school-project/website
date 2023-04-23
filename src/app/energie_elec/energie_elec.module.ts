import { NgModule } from '@angular/core';
import { EnergieElecModuleRouting } from './energie_elec-routing.module';

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
    EnergieElecModuleRouting
  ],
  providers: [],
})
export class EnergieElecModule { }
