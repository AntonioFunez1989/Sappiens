import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop17Page } from './pop17.page';

const routes: Routes = [
  {
    path: '',
    component: Pop17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop17PageRoutingModule {}
