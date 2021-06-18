import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop14 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop14',
  templateUrl: './pop14.page.html',
  styleUrls: ['./pop14.page.scss'],
})
export class Pop14Page implements OnInit {

  iPop14: iPop14[] = [

    {
      icon: 'ear',
      name:'Braile',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ear',
      name:'Lenguaje de Signos',
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
