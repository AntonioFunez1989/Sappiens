import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop6PageRoutingModule } from './pop6-routing.module';

import { Pop6Page } from './pop6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop6PageRoutingModule
  ],
  declarations: [Pop6Page]
})
export class Pop6PageModule {}
