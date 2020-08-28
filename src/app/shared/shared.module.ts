import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [ContactFormComponent, FooterComponent, NavBarComponent],
  imports: [CommonModule, RouterModule],
  exports: [ContactFormComponent, FooterComponent, NavBarComponent],
})
export class SharedModule {}
