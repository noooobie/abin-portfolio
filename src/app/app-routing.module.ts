import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { OtherWorkComponent } from './pages/other-work/other-work.component';

/** The sticky header is taller on phones (nav wraps), so measure it instead of hard-coding. */
export function headerOffset(): [number, number] {
  const header = document.querySelector('.header') as HTMLElement | null;
  return [0, (header ? header.offsetHeight : 80) + 8];
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work/:slug', component: CaseStudyComponent },
  { path: 'other-work', component: OtherWorkComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // new page -> start at top; back button -> restore position
      anchorScrolling: 'enabled',           // '/#work' scrolls to the element with id="work"
      scrollOffset: headerOffset,           // leave room for the sticky header
      onSameUrlNavigation: 'reload',        // clicking "Work" again re-scrolls even if the URL is unchanged
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
