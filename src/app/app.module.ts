import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AppNavbarComponent } from './navbar/navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { EnergieMecaniqueComponent } from './energie-mecanique/energie-mecanique.component';
import { EnergieElectriqueComponent } from './energie-electrique/energie-electrique.component';
import { EnergieThermiqueComponent } from './energie-thermique/energie-thermique.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EnergieElecModule } from './energie_elec/energie_elec.module';
import { EnergieMecaModule } from './energie_meca/energie_meca.module';
import { EnergieThermModule } from './energie_therm/energie_therm.module';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        ConclusionComponent,
        BibliographieComponent,
        EnergieMecaniqueComponent,
        EnergieElectriqueComponent,
        EnergieThermiqueComponent,
        PagenotfoundComponent,
        AppNavbarComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        NgbDropdownModule,
        FormsModule,
        EnergieElecModule,
        EnergieMecaModule,
        EnergieThermModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
