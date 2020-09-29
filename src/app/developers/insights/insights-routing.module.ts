import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsightsComponent } from './insights.component';

const routes: Routes = [
  {
    path: '',
    component: InsightsComponent,
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsRoutingModule {}
