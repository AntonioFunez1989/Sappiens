import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop12PageRoutingModule } from './pop12-routing.module';

import { Pop12Page } from './pop12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop12PageRoutingModule
  ],
  declarations: [Pop12Page]
})
export class Pop12PageModule {}
