import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompanyComponent, AboutComponent],
  imports: [CommonModule, CompanyRoutingModule, SharedModule],
})
export class CompanyModule {}
