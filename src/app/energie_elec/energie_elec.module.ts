import { NgModule } from '@angular/core';
import { ProtocleComponent } from './protocle/protocle.component';
import { EnergieElecModuleRouting } from './energie_elec-routing.module';

@NgModule({
  declarations: [
    ProtocleComponent,
  ],
  imports: [
    EnergieElecModuleRouting
  ],
  providers: [],
})
export class EnergieElecModule { }
