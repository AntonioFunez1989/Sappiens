import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pop3Page } from './pop3.page';

const routes: Routes = [
  {
    path: '',
    component: Pop3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pop3PageRoutingModule {}
