import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop17PageRoutingModule } from './pop17-routing.module';

import { Pop17Page } from './pop17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop17PageRoutingModule
  ],
  declarations: [Pop17Page]
})
export class Pop17PageModule {}
