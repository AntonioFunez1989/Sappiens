import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop6Page } from './pop6.page';

const routes: Routes = [
  {
    path: '',
    component: Pop6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop6PageRoutingModule {}
