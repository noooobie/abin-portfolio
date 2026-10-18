import { ChangeDetectorRef, Component, HostListener } from '@angular/core';

import { PROFILE } from '../../data/profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly profile = PROFILE;
  /** Whether the mobile hamburger menu is open. Ignored on wide screens. */
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  constructor(private cdr: ChangeDetectorRef) { }

  closeMenu(): void {
    if (!this.menuOpen) {
      return;
    }
    this.menuOpen = false;
    // Collapse the header right away: the router measures its height for the
    // anchor-scroll offset before Angular's normal change detection would run.
    this.cdr.detectChanges();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  // Rotating a phone or widening the window past the breakpoint shouldn't leave it stuck open.
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 600) {
      this.closeMenu();
    }
  }
}
