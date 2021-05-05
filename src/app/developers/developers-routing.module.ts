import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevelopersComponent } from './developers.component';
import { InsightsComponent } from './insights/insights.component';

const routes: Routes = [
  {
    path: '',
    component: DevelopersComponent,
    children: [
      {
        path: 'insights',
        component: InsightsComponent,
      },
      {
        path: 'insights/article/:id',
        loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule),
      },
      {
        path: '',
        redirectTo: 'insights',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevelopersRoutingModule { }