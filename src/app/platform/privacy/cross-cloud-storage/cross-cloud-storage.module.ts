import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CrossCloudStorageComponent } from './cross-cloud-storage.component';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [{ path: '', component: CrossCloudStorageComponent }];

@NgModule({
  declarations: [CrossCloudStorageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CrossCloudStorageModule {}
