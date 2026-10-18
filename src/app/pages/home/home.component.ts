import { ChangeDetectorRef, Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CASE_STUDIES } from '../../data/case-studies';
import {
  CERTIFICATIONS, EDUCATION, EXPERIENCE, PROFILE, SKILL_GROUPS,
} from '../../data/profile';

/** The headline word that gets the typewriter treatment, and the jumbled versions it cycles through. */
const TYPED_WORD = 'messy';
const SCRAMBLES = ['emssy', 'sesmy', 'ysems', 'smyes'];

/** Typewriter timings in milliseconds. */
const TYPE_MS = 120;
const ERASE_MS = 70;
const HOLD_WORD_MS = 2200;
const HOLD_SCRAMBLE_MS = 900;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;
  readonly caseStudies = CASE_STUDIES;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly certifications = CERTIFICATIONS;
  readonly skillGroups = SKILL_GROUPS;

  // Headline split around the animated word, e.g. "I turn " + "messy" + " data and ...".
  readonly word = TYPED_WORD;
  readonly hasWord = PROFILE.heroTitle.includes(TYPED_WORD);
  readonly titleBefore = this.hasWord ? PROFILE.heroTitle.split(TYPED_WORD)[0] : PROFILE.heroTitle;
  private readonly rest = this.hasWord ? PROFILE.heroTitle.split(TYPED_WORD).slice(1).join(TYPED_WORD) : '';
  // The headline font sets a wide gap before a full stop, so the final "." is styled separately.
  readonly titleStop = this.rest.endsWith('.') ? '.' : '';
  readonly titleAfter = this.titleStop ? this.rest.slice(0, -1) : this.rest;

  /** What the typewriter currently shows. Starts on the first scramble ("emssy"). */
  typed = SCRAMBLES[0];

  private running = false;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(private title: Title, private zone: NgZone, private cdr: ChangeDetectorRef) { }

  /** A role is current when its dates run to "Present". */
  isCurrent(dates: string): boolean {
    return /present/i.test(dates);
  }

  ngOnInit(): void {
    // Other pages change the tab title, so set it back when returning home.
    this.title.setTitle(`${PROFILE.name} - Data & Business Analyst`);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!this.hasWord || reduceMotion) {
      this.typed = TYPED_WORD; // no animation: just show the real word
      return;
    }
    this.running = true;
    // Run the timers outside Angular so each keystroke only re-renders this component.
    this.zone.runOutsideAngular(() => this.loop());
  }

  ngOnDestroy(): void {
    this.running = false;
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  /** emssy -> erase -> messy -> erase -> sesmy -> erase -> messy -> ... forever. */
  private async loop(): Promise<void> {
    let next = 1;
    await this.wait(HOLD_SCRAMBLE_MS);
    while (this.running) {
      await this.erase();
      await this.type(TYPED_WORD);
      await this.wait(HOLD_WORD_MS);
      await this.erase();
      await this.type(SCRAMBLES[next]);
      next = (next + 1) % SCRAMBLES.length;
      await this.wait(HOLD_SCRAMBLE_MS);
    }
  }

  private async type(text: string): Promise<void> {
    for (let i = 1; i <= text.length && this.running; i++) {
      this.show(text.slice(0, i));
      await this.wait(TYPE_MS);
    }
  }

  private async erase(): Promise<void> {
    while (this.typed.length && this.running) {
      this.show(this.typed.slice(0, -1));
      await this.wait(ERASE_MS);
    }
  }

  private show(text: string): void {
    this.typed = text;
    this.cdr.detectChanges();
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => { this.timer = setTimeout(resolve, ms); });
  }
}
