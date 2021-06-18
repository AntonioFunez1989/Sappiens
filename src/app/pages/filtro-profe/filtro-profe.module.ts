import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroProfePageRoutingModule } from './filtro-profe-routing.module';
import { FiltroProfePage } from './filtro-profe.page';

import {GooglePlaceModule, GooglePlaceDirective} from 'ngx-google-places-autocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroProfePageRoutingModule,
    GooglePlaceModule,

  ],
  declarations: [FiltroProfePage]
})
export class FiltroProfePageModule {

  @ViewChild("placesRef") placesRef : GooglePlaceDirective;


}
