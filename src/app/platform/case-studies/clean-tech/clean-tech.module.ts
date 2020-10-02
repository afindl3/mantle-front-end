import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CleanTechComponent } from './clean-tech.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: CleanTechComponent }];

@NgModule({
  declarations: [CleanTechComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CleanTechModule {}
