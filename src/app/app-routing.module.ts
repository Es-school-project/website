import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConclusionComponent } from './conclusion/conclusion.component';
import { BibliographieComponent } from './bibliographie/bibliographie.component';
import { EnergieMecaniqueComponent } from './energie-mecanique/energie-mecanique.component';
import { EnergieThermiqueComponent } from './energie-thermique/energie-thermique.component';
import { EnergieElectriqueComponent } from './energie-electrique/energie-electrique.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'energie_mecanique', component: EnergieMecaniqueComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'energie_thermique', component: EnergieThermiqueComponent },
  { path: 'energie_electrique', component: EnergieElectriqueComponent },
  { path: 'conclusion', component: ConclusionComponent },
  { path: 'bibliographie', component: BibliographieComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }