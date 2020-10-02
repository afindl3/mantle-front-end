import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportedNetworksRoutingModule } from './supported-networks-routing.module';
import { SupportedNetworksComponent } from './supported-networks.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SupportedNetworksComponent],
  imports: [CommonModule, SupportedNetworksRoutingModule, SharedModule],
})
export class SupportedNetworksModule {}
