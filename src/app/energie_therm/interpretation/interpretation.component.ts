import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as katex from 'katex';

@Component({
    selector: 'app-interpretation',
    templateUrl: './interpretation.component.html',
    styleUrls: ['./interpretation.component.css'],
    standalone: false
})
export class InterpretationComponent implements OnInit {
  renderedFormula1: SafeHtml = '';
  renderedFormula2: SafeHtml = '';
  renderedFormula3: SafeHtml = '';
  renderedFormula4: SafeHtml = '';
  renderedFormula5: SafeHtml = '';
  renderedFormula6: SafeHtml = '';
  renderedFormula7: SafeHtml = '';
  renderedFormula8: SafeHtml = '';
  renderedFormula9: SafeHtml = '';
  renderedFormula10: SafeHtml = '';
  renderedFormula11: SafeHtml = '';
  renderedFormula12: SafeHtml = '';
  renderedFormula13: SafeHtml = '';
  renderedFormula14: SafeHtml = '';
  renderedFormula15: SafeHtml = '';

  data: SafeHtml = '';
  data2: SafeHtml = '';
  data3: SafeHtml = '';
  data4: SafeHtml = '';
  data5: SafeHtml = '';
  data6: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.renderFormulas();
  }

  renderFormulas() {
    // const formula1 = 'v = \\frac{2\\pi D}{2\\cdot TPM/60}';
    const formula1 = 'v = \\frac{2\\pi\\left(\\frac{D}{2}\\right)\\cdot TPM}{60}';
    const formula2 = 'AN: v = \\frac{2\\pi \\cdot (1.2595\\times10^{-2}) \\cdot 210}{60}';
    const formula3 = 'v = 0.28 \\, \\text{m/s}';
    const formula4 = 'E_{th} = E_{c}';
    const formula5 = 'E_{c} = \\frac{1}{2} m v^2';
    const formula6 = 'E_{c} = \\frac{1}{2} m \\cdot 0.28^2';
    const formula7 = 'E_{c} = 0.0392 \\, m';
    const formula8 = 'E_{th} = 0.0392 \\times 4.3 \\quad \\Leftrightarrow \\quad 0.16856 \\, \\text{J}';
    const formula9 = 'Q = m \\cdot c \\cdot \\Delta T \\quad \\Leftrightarrow \\quad \\Delta T = \\frac{Q}{m \\cdot c}';
    const formula10 = 'AN: \\Delta T = \\frac{0.16856}{200 \\cdot 4.18}';
    const formula11 = '\\Delta T \\approx \\frac{2.107}{10.450} \\times 10^{-4} °C \\quad \\text{soit} \\quad 0.000216 °C';
    const formula12 = '100\\% \\,\\Leftrightarrow \\,2.16^\\circ C';
    const formula13 = 'x \\,\\Leftrightarrow \\,1.32^\\circ C';
    const formula14 = '\\text{Soit } x = \\frac{1.32 \\times 100}{2.16} = 61.1\\%';
    const formula15 = '\\Delta T = 2.29 \\times \\left(1 - \\frac{61.1}{100}\\right) \\approx 0.89^\\circ C';

    const data = 'm_{\\text{eau}} \\approx 200 \\, \\text{g} \\quad (200 \\, \\text{mL})';
    const data2 = 'Q = E_{\\text{c}} = 0.16856 \\, \\text{J}';
    const data3 = 'c_{\\text{eau}} = 4.18 \\, \\text{J/g/°C}';
    const data4 = 'TPM = 210';
    const data5= 'm = 4.3 \\, \\text{g}';
    const data6 = 'D = 25.19\\,\\text{mm} \\,\\text{soit} \\,2.519 \\times 10^{-2}\\,\\text{m}';

    this.renderedFormula1 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula1));
    this.renderedFormula2 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula2));
    this.renderedFormula3 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula3));
    this.renderedFormula4 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula4));
    this.renderedFormula5 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula5));
    this.renderedFormula6 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula6));
    this.renderedFormula7 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula7));
    this.renderedFormula8 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula8));
    this.renderedFormula9 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula9));
    this.renderedFormula10 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula10));
    this.renderedFormula11 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula11));
    this.renderedFormula12 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula12));
    this.renderedFormula13 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula13));
    this.renderedFormula14 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula14));
    this.renderedFormula15 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(formula15));

    this.data = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data));
    this.data2 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data2));
    this.data3 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data3));
    this.data4 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data4));
    this.data5 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data5));
    this.data6 = this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(data6));
  }
}
