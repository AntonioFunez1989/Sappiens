import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop10PageRoutingModule } from './pop10-routing.module';

import { Pop10Page } from './pop10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop10PageRoutingModule
  ],
  declarations: [Pop10Page]
})
export class Pop10PageModule {}
