import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop4PageRoutingModule } from './pop4-routing.module';

import { Pop4Page } from './pop4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop4PageRoutingModule
  ],
  declarations: [Pop4Page]
})
export class Pop4PageModule {}
