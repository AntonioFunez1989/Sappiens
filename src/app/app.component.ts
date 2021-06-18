import { Component } from '@angular/core';

interface Componente {
  icon:string;
  name: string;
  redirecTo: string;
}

interface Tab {

  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  componentes: Componente[] = [

    {
      icon: 'person-circle-outline',
      name:'Perfil',
      redirecTo:'/perfil'
    },
    {
      icon: 'ribbon-outline',
      name:'Teacher',
      redirecTo:'/teacher'
    },
    {
      icon: 'school-outline',
      name:'MisClases',
      redirecTo:'/mis-clases'
    },
    {
      icon: 'star-outline',
      name:'Favoritos',
      redirecTo:'/favoritos'
    },
    {
      icon: 'power-outline',
      name:'Desconectar',
      redirecTo:'login'
    }
  ];

  //Booleano para el ngIf del HTML
  bool = false;

  //Metodo que utiliza ./login para activar el tab
  darBoolTab(ok: boolean){
      this.bool=ok;
  }

  constructor() {}

  }

