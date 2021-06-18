import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop15 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop15',
  templateUrl: './pop15.page.html',
  styleUrls: ['./pop15.page.scss'],
})
export class Pop15Page implements OnInit {

  iPop15: iPop15[] = [

    {
      icon: 'airplane',
      name:'Prof. Turismo',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'airplane',
      name:'Ruteros',
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
