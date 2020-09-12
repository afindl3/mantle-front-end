import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CleanTechRoutingModule } from './clean-tech-routing.module';
import { CleanTechComponent } from './clean-tech.component';


@NgModule({
  declarations: [CleanTechComponent],
  imports: [
    CommonModule,
    CleanTechRoutingModule
  ]
})
export class CleanTechModule { }
