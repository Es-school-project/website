import { NgModule } from '@angular/core';
import { ProtocleComponent } from './protocle/protocle.component';
import { EnergieMecaModuleRouting } from './energie_meca-routing.module';

@NgModule({
  declarations: [
    ProtocleComponent,
  ],
  imports: [
    EnergieMecaModuleRouting
  ],
  providers: [],
})
export class EnergieMecaModule { }
