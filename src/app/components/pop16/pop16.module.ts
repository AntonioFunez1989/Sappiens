import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop16PageRoutingModule } from './pop16-routing.module';

import { Pop16Page } from './pop16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop16PageRoutingModule
  ],
  declarations: [Pop16Page]
})
export class Pop16PageModule {}
