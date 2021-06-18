import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop5PageRoutingModule } from './pop5-routing.module';

import { Pop5Page } from './pop5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop5PageRoutingModule
  ],
  declarations: [Pop5Page]
})
export class Pop5PageModule {}
