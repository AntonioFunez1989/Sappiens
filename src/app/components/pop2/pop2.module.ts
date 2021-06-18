import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop2PageRoutingModule } from './pop2-routing.module';

import { Pop2Page } from './pop2.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop2PageRoutingModule,
  ],
  declarations: [Pop2Page]
})
export class Pop2PageModule {}
