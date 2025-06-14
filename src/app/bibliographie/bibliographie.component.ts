import { Component } from '@angular/core';

@Component({
    selector: 'app-bibliographie',
    templateUrl: './bibliographie.component.html',
    styleUrls: ['./bibliographie.component.css'],
    standalone: false
})
export class BibliographieComponent {
  showLinksMecanique = false;
  showLinksThermique = false;
  showLinksElectrique = false;
  isArrowUpMecanique = false;
  isArrowUpThermique = false;
  isArrowUpElectrique = false;
  linksMecanique = [
    {
      title: "Best Demonstration of Resonance -MIT professor demonstrates how glass breaks due to forced resonance",
      url: "https://www.youtube.com/watch?v=pyBGSMxPSG0",
      class: "youtube",
      icon: "bi-youtube"
    },
    {
      title: "Experimentoboy: Casser un verre avec du son ?",
      url: "https://www.youtube.com/watch?v=QhwuYDfATLc",
      class: "youtube",
      icon: "bi-youtube"
    },
    {
      title: "On n'est pas que des cobayes: Peut-on casser un verre avec la voix ?",
      url: "https://www.youtube.com/watch?v=DP4wQmOGy5w",
      class: "youtube",
      icon: "bi-youtube"
    },
    {
      title: "CQFD : Peut-on casser un verre avec la voix?",
      url: "https://www.youtube.com/watch?v=e3CW0QTzUlc",
      class: "youtube",
      icon: "bi-youtube"
    },
    {
      title: "Science & Vie: Un simple son peut-il réellement casser du verre ?",
      url: "https://www.science-et-vie.com/article-magazine/un-simple-son-peut-il-reellement-casser-du-verre",
      class: "article",
      icon: "bi-book-fill"
    }
  ];
  linksThermique = [
    {
      title: "Ultrasonic Cavitation in Water",
      url: "https://www.youtube.com/watch?v=qkYtVjJGNRs",
      class: "youtube",
      icon: "bi-youtube"
    },
    {
      title: "Cordis: Transformer les ondes sonores en vagues de chaleur",
      url: "https://cordis.europa.eu/article/id/86348-turning-sound-waves-into-a-heat-wave/fr",
      class: "article",
      icon: "bi-book-fill"
    },
    {
      title: "La Tribune: Equium invente le chauffage et la climatisation par les ondes sonores",
      url: "https://www.latribune.fr/entreprises-finance/industrie/energie-environnement/equium-invente-le-chauffage-et-la-climatisation-par-les-ondes-sonores-939293.html",
      class: "article",
      icon: "bi-book-fill"
    },
    {
      title: "Begeek: Un son si fort qu’il peut faire bouillir de l’eau instantanément",
      url: "https://www.begeek.fr/un-son-si-fort-quil-peut-faire-bouillir-de-leau-instantanement-341640",
      class: "article",
      icon: "bi-book-fill"
    },
    {
      title: "Linfodurable: Pay-bas : des chercheurs parviennent à générer du froid grâce aux ondes sonores",
      url: "https://www.linfodurable.fr/technomedias/pays-bas-des-chercheurs-parviennent-generer-du-froid-grace-aux-ondes-sonores-9672",
      class: "article",
      icon: "bi-book-fill"
    },
    {
      title: "Wikipédia: Thermoacoustique ",
      url: "https://fr.wikipedia.org/wiki/Thermoacoustique",
      class: "article",
      icon: "bi-book-fill"
    }
  ];
  linksElectrique = [
    {
      title: "LeParisien: Futur : le bruit, nouvelle source d’énergie",
      url: "https://www.leparisien.fr/week-end/futur-le-bruit-nouvelle-source-d-energie-17-06-2013-2904413.php",
      class: "article",
      icon: "bi-book-fill"
    },
    {
      title: "Bruit, nuisances sonores et pollution sonore | Ministères Écologie Énergie Territoires",
      url: "https://www.ecologie.gouv.fr/bruit-nuisances-sonores-et-pollution-sonore",
      class: "youtube",
      icon: "bi-youtube"  
    }
  ]
  toggleLinksMecanique() {
    this.showLinksMecanique = !this.showLinksMecanique;
    this.linksMecanique.sort((a, b) => a.title.length - b.title.length);
    this.isArrowUpMecanique = !this.isArrowUpMecanique;
  }
  toggleLinksThermique() {
    this.showLinksThermique = !this.showLinksThermique;
    this.linksThermique.sort((a, b) => a.title.length - b.title.length);
    this.isArrowUpThermique = !this.isArrowUpThermique;
  }
  toggleLinksElectrique() {
    this.showLinksElectrique = !this.showLinksElectrique;
    this.linksElectrique.sort((a, b) => a.title.length - b.title.length);
    this.isArrowUpElectrique = !this.isArrowUpElectrique;
  }
}
