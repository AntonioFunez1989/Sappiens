import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroProfePage } from './filtro-profe.page';

const routes: Routes = [
  {
    path: '',
    component: FiltroProfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroProfePageRoutingModule {}
