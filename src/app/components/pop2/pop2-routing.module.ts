import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop2Page } from './pop2.page';

const routes: Routes = [
  {
    path: '',
    component: Pop2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop2PageRoutingModule {}
