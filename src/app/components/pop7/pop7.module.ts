import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop7PageRoutingModule } from './pop7-routing.module';

import { Pop7Page } from './pop7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop7PageRoutingModule
  ],
  declarations: [Pop7Page]
})
export class Pop7PageModule {}
