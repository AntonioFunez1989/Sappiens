import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop4Page } from './pop4.page';

const routes: Routes = [
  {
    path: '',
    component: Pop4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop4PageRoutingModule {}
