import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatMakesUsDifferentRoutingModule } from './what-makes-us-different-routing.module';
import { WhatMakesUsDifferentComponent } from './what-makes-us-different.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [WhatMakesUsDifferentComponent],
  imports: [CommonModule, WhatMakesUsDifferentRoutingModule, SharedModule],
})
export class WhatMakesUsDifferentModule {}
