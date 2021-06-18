import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop8PageRoutingModule } from './pop8-routing.module';

import { Pop8Page } from './pop8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop8PageRoutingModule
  ],
  declarations: [Pop8Page]
})
export class Pop8PageModule {}
