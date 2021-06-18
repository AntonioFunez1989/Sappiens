import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop3PageRoutingModule } from './pop3-routing.module';

import { Pop3Page } from './pop3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop3PageRoutingModule
  ],
  declarations: [Pop3Page]
})
export class Pop3PageModule {}
