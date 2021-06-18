import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop6 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop6',
  templateUrl: './pop6.page.html',
  styleUrls: ['./pop6.page.scss'],
})
export class Pop6Page implements OnInit {

  iPop6: iPop6[] = [

    {
      icon: 'color-palette',
      name:'Pintura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'color-palette',
      name:'Escultura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'color-palette',
      name:'Talla',
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
