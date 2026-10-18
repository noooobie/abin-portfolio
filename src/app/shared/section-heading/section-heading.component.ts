import { Component, Input } from '@angular/core';

/** Small uppercase label that opens a section, e.g. "Selected case studies". */
@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
})
export class SectionHeadingComponent {
  @Input() label = '';
}
