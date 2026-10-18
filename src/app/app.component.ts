import { Component } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs/operators';

import { headerOffset } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** Path (without #fragment) of the page we were on, to tell "same page" from "new page". */
  private lastPath = '';

  constructor(router: Router) {
    // The router emits a Scroll event after each navigation, once the new page has rendered.
    router.events
      .pipe(filter((e): e is Scroll => e instanceof Scroll))
      .subscribe(e => this.handleScroll(e));
  }

  private handleScroll(e: Scroll): void {
    const end = e.routerEvent as NavigationEnd;
    const path = end.urlAfterRedirects.split('#')[0];
    const samePage = path === this.lastPath;
    this.lastPath = path;

    if (e.position) {
      // Back/forward button: return to where the visitor was.
      window.scrollTo(e.position[0], e.position[1]);
    } else if (e.anchor) {
      // "Work", "Experience"...: smooth on the same page, instant when arriving from another page.
      this.scrollToAnchor(e.anchor, samePage);
    } else {
      // A new page always starts at the top, instantly.
      window.scrollTo(0, 0);
    }
  }

  private scrollToAnchor(id: string, smooth: boolean): void {
    const el = document.getElementById(id);
    if (!el) {
      return;
    }
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset()[1];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top, left: 0, behavior: smooth && !reduceMotion ? 'smooth' : 'auto' });
  }
}
