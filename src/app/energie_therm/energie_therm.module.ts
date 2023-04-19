import { NgModule } from '@angular/core';
import { ProtocleComponent } from './protocle/protocle.component';
import { EnergieThermModuleRouting } from './energie_therm-routing.module';

@NgModule({
  declarations: [
    ProtocleComponent,
  ],
  imports: [
    EnergieThermModuleRouting
  ],
  providers: [],
})
export class EnergieThermModule { }
