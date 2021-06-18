import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop16 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop16',
  templateUrl: './pop16.page.html',
  styleUrls: ['./pop16.page.scss'],
})
export class Pop16Page implements OnInit {

  iPop16: iPop16[] = [

    {
      icon: 'shirt',
      name:'Costura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'shirt',
      name:'Personal Shoper',
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
