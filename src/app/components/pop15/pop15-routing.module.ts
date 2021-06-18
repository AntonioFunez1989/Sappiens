import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop15Page } from './pop15.page';

const routes: Routes = [
  {
    path: '',
    component: Pop15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop15PageRoutingModule {}
