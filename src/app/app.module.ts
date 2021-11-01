import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './portfolio/navbar/navbar.component';
import { HeaderComponent } from './portfolio/header/header.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { CertificatesComponent } from './portfolio/certificates/certificates.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent, SkillsComponent, ProjectsComponent, CertificatesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
