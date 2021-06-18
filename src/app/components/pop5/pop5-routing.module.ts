import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop5Page } from './pop5.page';

const routes: Routes = [
  {
    path: '',
    component: Pop5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop5PageRoutingModule {}
