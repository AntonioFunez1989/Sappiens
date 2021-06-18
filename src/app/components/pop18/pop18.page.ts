import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop18 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop18',
  templateUrl: './pop18.page.html',
  styleUrls: ['./pop18.page.scss'],
})
export class Pop18Page implements OnInit {

  iPop18: iPop18[] = [

    {
      icon: 'telescope',
      name:'Astronomia',
      redirecTo:'/filtro-profe'
    },

  ]
  constructor( 
    private popoverCtrl: PopoverController,
    private popservices: PopServicesService) {}

  ngOnInit() {}

  valorOk: string;

  onClick(valor: string){

    this.valorOk=valor;

    this.popservices.sendObjectSource(this.valorOk);

    this.popoverCtrl.dismiss({});
  }

}
