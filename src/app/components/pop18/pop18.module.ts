import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pop18PageRoutingModule } from './pop18-routing.module';

import { Pop18Page } from './pop18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pop18PageRoutingModule,

    
  ],
  declarations: [Pop18Page]
})

export class Pop18PageModule {


}
