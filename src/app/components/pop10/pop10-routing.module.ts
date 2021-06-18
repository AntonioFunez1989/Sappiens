import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop10Page } from './pop10.page';

const routes: Routes = [
  {
    path: '',
    component: Pop10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop10PageRoutingModule {}
