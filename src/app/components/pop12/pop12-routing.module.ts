import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop12Page } from './pop12.page';

const routes: Routes = [
  {
    path: '',
    component: Pop12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop12PageRoutingModule {}
