import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop9Page } from './pop9.page';

const routes: Routes = [
  {
    path: '',
    component: Pop9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop9PageRoutingModule {}
