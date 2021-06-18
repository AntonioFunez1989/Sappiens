import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop5 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop5',
  templateUrl: './pop5.page.html',
  styleUrls: ['./pop5.page.scss'],
})
export class Pop5Page implements OnInit {

  iPop5: iPop5[] = [

    {
      icon: 'earth-sharp',
      name:'Inglés',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Chino',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Alemán',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Francés',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Japonés',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Portugués',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'earth-sharp',
      name:'Esperanto',
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
