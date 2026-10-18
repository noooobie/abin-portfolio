import { Component, Input } from '@angular/core';

import { CaseStudy } from '../../data/models';

/** Homepage card that links to /work/:slug. */
@Component({
  selector: 'app-case-study-card',
  templateUrl: './case-study-card.component.html',
  styleUrls: ['./case-study-card.component.scss'],
})
export class CaseStudyCardComponent {
  // `!` tells strict TypeScript the parent always passes this in.
  @Input() study!: CaseStudy;
}
