import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop8 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop8',
  templateUrl: './pop8.page.html',
  styleUrls: ['./pop8.page.scss'],
})
export class Pop8Page implements OnInit {

  iPop8: iPop8[] = [

    {
      icon: 'restaurant',
      name:'Cocina clásica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'restaurant',
      name:'Cocina de autor',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'restaurant',
      name:'Repostería',
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
