import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop9PageRoutingModule } from './pop9-routing.module';

import { Pop9Page } from './pop9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop9PageRoutingModule
  ],
  declarations: [Pop9Page]
})
export class Pop9PageModule {}
