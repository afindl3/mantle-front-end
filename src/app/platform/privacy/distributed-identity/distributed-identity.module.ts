import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DistributedIdentityComponent } from './distributed-identity.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: DistributedIdentityComponent }];

@NgModule({
  declarations: [DistributedIdentityComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DistributedIdentityModule {}
