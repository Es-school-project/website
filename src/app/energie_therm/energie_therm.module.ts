import { NgModule } from '@angular/core';
import { ProtocleComponent } from './protocle/protocle.component';
import { EnergieThermModuleRouting } from './energie_therm-routing.module';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
  declarations: [
    ProtocleComponent,
    ManipulationComponent,
    ConclusionComponent,
  ],
  imports: [
    EnergieThermModuleRouting
  ],
  providers: [],
})
export class EnergieThermModule { }
