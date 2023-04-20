import { NgModule } from '@angular/core';
import { ProtocleComponent } from './protocle/protocle.component';
import { EnergieElecModuleRouting } from './energie_elec-routing.module';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { InterpretationComponent } from './interpretation/interpretation.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    ProtocleComponent,
    ManipulationComponent,
    InterpretationComponent,
    ConclusionComponent,
  ],
  imports: [
    EnergieElecModuleRouting
  ],
  providers: [],
})
export class EnergieElecModule { }
