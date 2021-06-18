import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop13PageRoutingModule } from './pop13-routing.module';

import { Pop13Page } from './pop13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop13PageRoutingModule
  ],
  declarations: [Pop13Page]
})
export class Pop13PageModule {}
