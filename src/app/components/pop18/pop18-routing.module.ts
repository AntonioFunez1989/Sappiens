import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop18Page } from './pop18.page';

const routes: Routes = [
  {
    path: '',
    component: Pop18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop18PageRoutingModule {}
