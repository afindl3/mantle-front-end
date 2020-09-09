import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
    TrustedCompaniesComponent,
  ],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [
    ContactFormComponent,
    FooterComponent,
    ImageHeaderComponent,
    MeshHeaderDarkComponent,
    MeshHeaderLightComponent,
    NavBarComponent,
    OverlayHeaderComponent,
    PosterComponent,
    TrustedCompaniesComponent,
  ],
})
export class SharedModule {}
