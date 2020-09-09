import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DataProvenanceComponent } from './data-provenance.component';

const routes: Routes = [{ path: '', component: DataProvenanceComponent }];

@NgModule({
  declarations: [DataProvenanceComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DataProvenanceModule {}
