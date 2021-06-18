import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop14PageRoutingModule } from './pop14-routing.module';

import { Pop14Page } from './pop14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop14PageRoutingModule
  ],
  declarations: [Pop14Page]
})
export class Pop14PageModule {}
