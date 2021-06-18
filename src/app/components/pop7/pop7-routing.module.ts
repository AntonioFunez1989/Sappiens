import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop7Page } from './pop7.page';

const routes: Routes = [
  {
    path: '',
    component: Pop7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop7PageRoutingModule {}
