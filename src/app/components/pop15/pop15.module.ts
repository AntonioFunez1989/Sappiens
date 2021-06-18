import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop15PageRoutingModule } from './pop15-routing.module';

import { Pop15Page } from './pop15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop15PageRoutingModule
  ],
  declarations: [Pop15Page]
})
export class Pop15PageModule {}
