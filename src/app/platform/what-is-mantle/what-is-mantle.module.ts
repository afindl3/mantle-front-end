import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatIsMantleRoutingModule } from './what-is-mantle-routing.module';
import { WhatIsMantleComponent } from './what-is-mantle.component';

@NgModule({
  declarations: [WhatIsMantleComponent],
  imports: [CommonModule, WhatIsMantleRoutingModule],
})
export class WhatIsMantleModule {}
