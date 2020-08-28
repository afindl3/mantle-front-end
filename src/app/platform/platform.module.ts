import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent } from './platform.component';
import { WhatIsMantleComponent } from './what-is-mantle/what-is-mantle.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlatformComponent, WhatIsMantleComponent],
  imports: [CommonModule, PlatformRoutingModule, SharedModule],
})
export class PlatformModule {}
