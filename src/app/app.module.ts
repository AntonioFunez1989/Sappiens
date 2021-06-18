import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import { TabsPageModule } from './pages/tabs/tabs.module';
import { ComponentsModule } from './components/components.module';
import { PageModule } from './pages/page.module';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {firebaseConfig } from 'src/environments/environment';
import { TabsPage } from './pages/tabs/tabs.page';


@NgModule({
 
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule, 
    GooglePlaceModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ComponentsModule,
    PageModule,
    AngularFireModule,
    TabsPageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicModule.forRoot(),
    
  ],
  declarations: [AppComponent],
  exports: [AppComponent],

  providers: [ 
    AngularFirestore,
    AngularFireAuth,
    GooglePlus,
    TabsPage,
    {provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy }],

  bootstrap: [AppComponent],
  

})
export class AppModule {}
