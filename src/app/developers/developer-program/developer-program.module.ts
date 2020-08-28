import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperProgramRoutingModule } from './developer-program-routing.module';
import { DeveloperProgramComponent } from './developer-program.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DeveloperProgramComponent],
  imports: [CommonModule, DeveloperProgramRoutingModule, SharedModule],
})
export class DeveloperProgramModule {}
