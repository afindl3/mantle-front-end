import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ImageHeaderComponent } from './headers/image-header/image-header.component';
import { MeshHeaderDarkComponent } from './headers/mesh-header-dark/mesh-header-dark.component';
import { MeshHeaderLightComponent } from './headers/mesh-header-light/mesh-header-light.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavExtendedComponent } from './nav-extended/nav-extended.component';
import { OverlayHeaderComponent } from './headers/overlay-header/overlay-header.component';
import { TrustedCompaniesComponent } from './trusted-companies/trusted-companies.component';
import { PosterComponent } from './poster/poster.component';
import { StaggeredIconsComponent } from './staggered-icons/staggered-icons.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SplitSubheaderComponent } from './split-subheader/split-subheader.component';
import { RequestAccessComponent } from './request-access/request-access.component';

@NgModule({
  declarations: [
    ContactFormComponent,
    FooterComponent,
    ImageHeaderComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    NavBarComponent,
    NavExtendedComponent,
    OverlayHeaderComponent,
    PosterComponent,
    SplitSubheaderComponent,
    StaggeredIconsComponent,
    TestimonialsComponent,
    TrustedCompaniesComponent,
    RequestAccessComponent,
  ],
  imports: [CommonModule, HttpClientModule, NgbModule, ReactiveFormsModule, RouterModule],
  exports: [
    ContactFormComponent,
    FooterComponent,
    ImageHeaderComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    NavBarComponent,
    OverlayHeaderComponent,
    PosterComponent,
    SplitSubheaderComponent,
    StaggeredIconsComponent,
    TestimonialsComponent,
    TrustedCompaniesComponent,
  ],
})
export class SharedModule {}
