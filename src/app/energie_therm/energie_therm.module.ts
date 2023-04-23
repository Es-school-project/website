import { NgModule } from '@angular/core';
import { ProtocoleComponent } from './protocole/protocole.component';
import { EnergieThermModuleRouting } from './energie_therm-routing.module';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { InterpretationComponent } from './interpretation/interpretation.component';

@NgModule({
  declarations: [
    ProtocoleComponent,
    ManipulationComponent,
    ConclusionComponent,
    InterpretationComponent,
  ],
  imports: [
    EnergieThermModuleRouting
  ],
  providers: [],
})
export class EnergieThermModule { }
