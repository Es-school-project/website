import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component'; // <--- Importez ici
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { EnergieMecaniqueComponent } from './energie-mecanique/energie-mecanique.component';
import { EnergieElectriqueComponent } from './energie-electrique/energie-electrique.component';
import { EnergieThermiqueComponent } from './energie-thermique/energie-thermique.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ConclusionComponent,
    BibliographieComponent,
    EnergieMecaniqueComponent,
    EnergieElectriqueComponent,
    EnergieThermiqueComponent,
    PagenotfoundComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
