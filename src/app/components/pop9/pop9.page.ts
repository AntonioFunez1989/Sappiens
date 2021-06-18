import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop9 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop9',
  templateUrl: './pop9.page.html',
  styleUrls: ['./pop9.page.scss'],
})
export class Pop9Page implements OnInit {

  iPop9: iPop9[] = [

    {
      icon: 'accessibility',
      name:'Danza Clásica',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'accessibility',
      name:'Baile de Salón',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'accessibility',
      name:'Capoeira',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'accessibility',
      name:'Break Dance',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'accessibility',
      name:'Oriental',
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
