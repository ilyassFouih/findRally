import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'landing-page-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <landing-page-analog-welcome /> `,
})
export default class HomeComponent {}
