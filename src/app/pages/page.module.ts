import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsPageModule } from './tabs/tabs.module';
import { HomePageModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TabsPageModule,
    HomePageModule
  ],
})
export class PageModule { }
