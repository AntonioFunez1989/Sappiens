import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop11 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop11',
  templateUrl: './pop11.page.html',
  styleUrls: ['./pop11.page.scss'],
})
export class Pop11Page implements OnInit {

  iPop11: iPop11[] = [

    {
      icon: 'car-sport',
      name:'Mecánica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'car-sport',
      name:'Chapa y pintura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'car-sport',
      name:'Electrónica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'car-sport',
      name:'Mantenimiento',
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
