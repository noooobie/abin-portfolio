import { Component } from '@angular/core';

import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly profile = PROFILE;
}
