import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop12 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop12',
  templateUrl: './pop12.page.html',
  styleUrls: ['./pop12.page.scss'],
})
export class Pop12Page implements OnInit {

  iPop12: iPop12[] = [

    {
      icon: 'camera',
      name:'Fotografía',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'camera',
      name:'Video',
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
