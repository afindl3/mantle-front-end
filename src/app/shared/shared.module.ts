import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { SingleImgHeaderComponent } from './headers/single-img-header/single-img-header.component';
import { MeshHeaderDarkComponent } from './headers/mesh-header-dark/mesh-header-dark.component';
import { MeshHeaderLightComponent } from './headers/mesh-header-light/mesh-header-light.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavExtendedComponent } from './nav-extended/nav-extended.component';
import { MultiImgHeaderComponent } from './headers/multi-img-header/multi-img-header.component';
import { TrustedCompaniesComponent } from './trusted-companies/trusted-companies.component';
import { PosterComponent } from './poster/poster.component';
import { StaggeredIconsComponent } from './staggered-icons/staggered-icons.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SplitSubheaderComponent } from './split-subheader/split-subheader.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { StaggeredColumnsComponent } from './staggered-columns/staggered-columns.component';
import { BlogTileComponent } from './blog-tile/blog-tile.component';
import { CaseSectionComponent } from './case-section/case-section.component';

@NgModule({
  declarations: [
    BlogTileComponent,
    CaseSectionComponent,
    ContactFormComponent,
    FooterComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    MultiImgHeaderComponent,
    NavBarComponent,
    NavExtendedComponent,
    PosterComponent,
    RequestAccessComponent,
    SingleImgHeaderComponent,
    SplitSubheaderComponent,
    StaggeredColumnsComponent,
    StaggeredIconsComponent,
    TestimonialsComponent,
    TrustedCompaniesComponent,
  ],
  imports: [CommonModule, HttpClientModule, NgbModule, ReactiveFormsModule, RouterModule],
  exports: [
    BlogTileComponent,
    CaseSectionComponent,
    ContactFormComponent,
    FooterComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    MultiImgHeaderComponent,
    NavBarComponent,
    PosterComponent,
    SingleImgHeaderComponent,
    SplitSubheaderComponent,
    StaggeredColumnsComponent,
    StaggeredIconsComponent,
    TestimonialsComponent,
    TrustedCompaniesComponent,
  ],
})
export class SharedModule {}
