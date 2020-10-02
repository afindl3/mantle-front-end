import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersComponent } from './developers.component';
import { DeveloperProgramComponent } from './developer-program/developer-program.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DevelopersComponent, DeveloperProgramComponent],
  imports: [CommonModule, DevelopersRoutingModule, SharedModule],
})
export class DevelopersModule {}
