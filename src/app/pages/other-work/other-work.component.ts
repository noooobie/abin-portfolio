import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OTHER_WORK, PROFILE } from '../../data/profile';

@Component({
  selector: 'app-other-work',
  templateUrl: './other-work.component.html',
  styleUrls: ['./other-work.component.scss'],
})
export class OtherWorkComponent implements OnInit {
  readonly projects = OTHER_WORK;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(`Other work - ${PROFILE.name}`);
  }
}
