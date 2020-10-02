import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeveloperProgramRoutingModule } from './developer-program-routing.module';
import { DeveloperProgramComponent } from './developer-program.component';

@NgModule({
  declarations: [DeveloperProgramComponent],
  imports: [CommonModule, DeveloperProgramRoutingModule],
})
export class DeveloperProgramModule {}
