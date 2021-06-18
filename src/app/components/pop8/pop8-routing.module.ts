import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop8Page } from './pop8.page';

const routes: Routes = [
  {
    path: '',
    component: Pop8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop8PageRoutingModule {}
