import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LegalTechComponent } from './legal-tech.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: LegalTechComponent }];

@NgModule({
  declarations: [LegalTechComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class LegalTechModule {}
