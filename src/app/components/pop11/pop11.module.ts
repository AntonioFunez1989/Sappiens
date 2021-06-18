import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop11PageRoutingModule } from './pop11-routing.module';

import { Pop11Page } from './pop11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop11PageRoutingModule
  ],
  declarations: [Pop11Page]
})
export class Pop11PageModule {}
