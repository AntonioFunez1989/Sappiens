import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop16Page } from './pop16.page';

const routes: Routes = [
  {
    path: '',
    component: Pop16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop16PageRoutingModule {}
