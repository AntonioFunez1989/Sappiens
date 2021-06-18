import { Component, OnInit } from '@angular/core';
import { BooleanValueAccessor } from '@ionic/angular';

interface Tab {

  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})

export class TabsPage implements OnInit {

  cargaTab: Tab[] = [

    {
      icon: 'search-sharp',
      name:'Buscar',
      redirecTo:'/home'
    },
    {
      icon: 'bulb-outline',
      name:'Aprende+',
      redirecTo:'/perfil'
    },
    {
      icon: 'star-outline',
      name:'Favoritos',
      redirecTo:'/favoritos'
    }
  ]
  constructor() { }
  ngOnInit() {}

}
