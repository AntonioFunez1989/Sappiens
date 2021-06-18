import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop11Page } from './pop11.page';

const routes: Routes = [
  {
    path: '',
    component: Pop11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop11PageRoutingModule {}
