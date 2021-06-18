import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop17 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop17',
  templateUrl: './pop17.page.html',
  styleUrls: ['./pop17.page.scss'],
})
export class Pop17Page implements OnInit {

  iPop17: iPop17[] = [

    {
      icon: 'game-controller',
      name:'Gamers',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'game-controller',
      name:'Influencers',
      redirecTo:'/filtro-profe'
    }
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
