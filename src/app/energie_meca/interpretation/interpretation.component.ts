import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import katex from 'katex';

@Component({
  selector: 'app-interpretation',
  templateUrl: './interpretation.component.html',
  styleUrls: ['./interpretation.component.css']
})
export class InterpretationComponent implements OnInit {
  renderedFormula: SafeHtml = '';
  renderedFormula2: SafeHtml = '';
  renderedFormula3: SafeHtml = '';
  renderedFormula4: SafeHtml = '';

  data: SafeHtml = '';
  data2: SafeHtml = '';
  data3: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.renderFormulas();
  }

  renderFormulas() {
    const formula1 = 'P = 10^{\\frac{L}{10}} \\times Po';
    const formula2 = 'AN: P = 10^{\\left(\\frac{120}{10}\\right)} \\times 10^{-12} = 1W';
    const formula3 = 'E = P \\times t';
    const formula4 = 'AN: E = 1 \\times 3 = 3J';
    const data = 'Po = 1 \\times 10^{-12} \\, \\text{W}';
    const data2 = 'L = 120 \\, \\text{dB}';
    const data3 = 't = 3 \\, \\text{s}';
    
    this.renderedFormula = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula1));
    this.renderedFormula2 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula2));
    this.renderedFormula3 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula3));
    this.renderedFormula4 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula4));

    this.data = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data));
    this.data2 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data2));
    this.data3 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data3));
  }
}
