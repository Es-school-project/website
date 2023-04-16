import { Component } from '@angular/core';

@Component({
  selector: 'app-bibliographie',
  templateUrl: './bibliographie.component.html',
  styleUrls: ['./bibliographie.component.css']
})
export class BibliographieComponent {
  showLinks = false;
  isArrowUp = false;
  links = [
    {
      title: "Best Demonstration of Resonance -MIT professor demonstrates how glass breaks due to forced resonance",
      url: "https://www.youtube.com/watch?v=pyBGSMxPSG0",
      class: "youtube",
      icon: "youtube-icon"
    },
    {
      title: "On n'est pas que des cobayes: Peut-on casser un verre avec la voix ?",
      url: "https://www.youtube.com/watch?v=DP4wQmOGy5w",
      class: "youtube",
      icon: "youtube-icon"
    },
    {
      title: "CQFD : Peut-on casser un verre avec la voix?",
      url: "https://www.youtube.com/watch?v=e3CW0QTzUlc",
      class: "youtube",
      icon: "youtube-icon"
    },
    {
      title: "Science & Vie: Un simple son peut-il réellement casser du verre ?",
      url: "https://www.science-et-vie.com/article-magazine/un-simple-son-peut-il-reellement-casser-du-verre",
      class: "article",
      icon: "article-icon"
    }
  ];

  toggleLinks() {
    this.showLinks = !this.showLinks;
    this.links.sort((a, b) => a.title.length - b.title.length);
    this.isArrowUp = !this.isArrowUp;
  }
}
