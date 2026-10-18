import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { OtherWorkComponent } from './pages/other-work/other-work.component';

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
      scrollOffset: [0, 80],                // leave room for the sticky header
      onSameUrlNavigation: 'reload',        // clicking "Work" again re-scrolls even if the URL is unchanged
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
