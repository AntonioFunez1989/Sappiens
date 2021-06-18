import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop14Page } from './pop14.page';

const routes: Routes = [
  {
    path: '',
    component: Pop14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop14PageRoutingModule {}
