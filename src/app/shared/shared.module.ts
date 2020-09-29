import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogTileComponent } from './body-subsections/blog-tile/blog-tile.component';
import { CaseSectionComponent } from './body-sections/case-section/case-section.component';
import { ContactFormComponent } from './body-sections/contact-form/contact-form.component';
import { ContactModalComponent } from './modals/contact-modal/contact-modal.component';
import { FooterComponent } from './footer/footer.component';
import { MeshHeaderDarkComponent } from './headers/mesh-header-dark/mesh-header-dark.component';
import { MeshHeaderLightComponent } from './headers/mesh-header-light/mesh-header-light.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavExtendedComponent } from './modals/nav-extended/nav-extended.component';
import { MultiImgHeaderComponent } from './headers/multi-img-header/multi-img-header.component';
import { TrustedCompaniesComponent } from './body-sections/trusted-companies/trusted-companies.component';
import { PosterComponent } from './body-subsections/poster/poster.component';
import { RequestAccessComponent } from './modals/request-access/request-access.component';
import { SingleColumnComponent } from './body-sections/single-column/single-column.component';
import { SingleImgHeaderComponent } from './headers/single-img-header/single-img-header.component';
import { SplitSubheaderComponent } from './body-sections/split-subheader/split-subheader.component';
import { StaggeredColumnsComponent } from './body-sections/staggered-columns/staggered-columns.component';
import { StaggeredIconsComponent } from './body-sections/staggered-icons/staggered-icons.component';
import { TestimonialsComponent } from './body-sections/testimonials/testimonials.component';

@NgModule({
  declarations: [
    BlogTileComponent,
    CaseSectionComponent,
    ContactFormComponent,
    ContactModalComponent,
    FooterComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    MultiImgHeaderComponent,
    NavBarComponent,
    NavExtendedComponent,
    PosterComponent,
    RequestAccessComponent,
    SingleColumnComponent,
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
    SingleColumnComponent,
    SingleImgHeaderComponent,
    SplitSubheaderComponent,
    StaggeredColumnsComponent,
    StaggeredIconsComponent,
    TestimonialsComponent,
    TrustedCompaniesComponent,
  ],
})
export class SharedModule {}
