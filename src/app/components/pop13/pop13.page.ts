import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop13 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop13',
  templateUrl: './pop13.page.html',
  styleUrls: ['./pop13.page.scss'],
})
export class Pop13Page implements OnInit {

  iPop13: iPop13[] = [

    {
      icon: 'ticket',
      name:'Teatro',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ticket',
      name:'Improvisación',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ticket',
      name:'Hablar en público',
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

    if(this.valorOk=='Hablar en público'){this.valorOk='Comunicación'}

    this.popservices.sendObjectSource(this.valorOk);

    this.popoverCtrl.dismiss({});
  }

}
