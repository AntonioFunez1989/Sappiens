import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop13Page } from './pop13.page';

const routes: Routes = [
  {
    path: '',
    component: Pop13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop13PageRoutingModule {}
