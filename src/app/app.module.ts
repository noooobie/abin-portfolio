import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CaseStudyCardComponent } from './shared/case-study-card/case-study-card.component';
import { SectionHeadingComponent } from './shared/section-heading/section-heading.component';
import { OtherWorkComponent } from './pages/other-work/other-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseStudyComponent,
    HeaderComponent,
    FooterComponent,
    CaseStudyCardComponent,
    SectionHeadingComponent,
    OtherWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
