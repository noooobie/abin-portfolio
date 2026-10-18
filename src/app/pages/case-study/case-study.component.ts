import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { findCaseStudy } from '../../data/case-studies';
import { CaseStudy } from '../../data/models';
import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss'],
})
export class CaseStudyComponent implements OnInit {
  study: CaseStudy | undefined;

  constructor(private route: ActivatedRoute, private title: Title) { }

  ngOnInit(): void {
    // Subscribe (rather than read once) so moving between case studies updates the page.
    this.route.paramMap.subscribe(params => {
      this.study = findCaseStudy(params.get('slug'));
      this.title.setTitle(this.study ? `${this.study.title} — ${PROFILE.name}` : PROFILE.name);
    });
  }
}
