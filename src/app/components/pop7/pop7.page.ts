import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop7 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop7',
  templateUrl: './pop7.page.html',
  styleUrls: ['./pop7.page.scss'],
})
export class Pop7Page implements OnInit {

  iPop7: iPop7[] = [

    {
      icon: 'musical-notes',
      name:'Guitarra Clasica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Guitarra Acústica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Guitarra Eléctrica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Batería',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Bajo',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Chelo',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Violin',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Contrabajo',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Trompeta',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Tuba',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Armónica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Flauta',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Fagot',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Clarinete',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'musical-notes',
      name:'Trompa',
      redirecTo:'/filtro-profe'
    },

  ]

  constructor( 
    private popoverCtrl: PopoverController,
    private popservices: PopServicesService
    ) {}

  ngOnInit() {}

  valorOk: string;

  onClick(valor: string){

    this.valorOk=valor;

    this.popservices.sendObjectSource(this.valorOk);

    this.popoverCtrl.dismiss({});
  }

}
