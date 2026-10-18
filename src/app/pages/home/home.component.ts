import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CASE_STUDIES } from '../../data/case-studies';
import {
  CERTIFICATIONS, EDUCATION, EXPERIENCE, INVOLVEMENT, PROFILE, SKILL_GROUPS,
} from '../../data/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly profile = PROFILE;
  readonly caseStudies = CASE_STUDIES;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly involvement = INVOLVEMENT;
  readonly skillGroups = SKILL_GROUPS;

  constructor(private title: Title) { }

  ngOnInit(): void {
    // Other pages change the tab title, so set it back when returning home.
    this.title.setTitle(`${PROFILE.name} — Data & Business Analyst`);
  }
}
