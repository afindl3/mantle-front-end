import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyDataComponent } from './privacy-data.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: PrivacyDataComponent }];

@NgModule({
  declarations: [PrivacyDataComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class PrivacyDataModule { }
