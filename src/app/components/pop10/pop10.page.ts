import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop10 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop10',
  templateUrl: './pop10.page.html',
  styleUrls: ['./pop10.page.scss'],
})
export class Pop10Page implements OnInit {

  iPop10: iPop10[] = [

    {
      icon: 'barbell',
      name:'Nutrición',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'barbell',
      name:'Manicura   Pedicura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'barbell',
      name:'Maquillaje',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'barbell',
      name:'Peluquería',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'barbell',
      name:'Ent. Personal',
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
