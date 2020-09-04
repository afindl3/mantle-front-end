import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavExtendedComponent } from './nav-extended/nav-extended.component';

@NgModule({
  declarations: [ContactFormComponent, FooterComponent, NavBarComponent, NavExtendedComponent],
  imports: [CommonModule, NgbModule, RouterModule],
  exports: [ContactFormComponent, FooterComponent, NavBarComponent],
})
export class SharedModule {}
