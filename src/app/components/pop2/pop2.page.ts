import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop2 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop2',
  templateUrl: './pop2.page.html',
  styleUrls: ['./pop2.page.scss'],

})
export class Pop2Page implements OnInit {

  iPop2: iPop2[] = [

    {
      icon: 'medal-sharp',
      name:'Multitarea',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Lengua y Literatura',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Matemáticas',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Inglés',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Física - Química',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Historia',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'medal-sharp',
      name:'Dibujo técnico',
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

    if(this.valorOk=='Multitarea'){this.valorOk = 'Secundaria'}
    else if(this.valorOk=='Matemáticas'){this.valorOk='Matemáticas nivel secundaria'}
    else if(this.valorOk=='Inglés'){this.valorOk='Inglés nivel secundaria'}
    else if(this.valorOk=='Historia'){this.valorOk='Historia nivel secundaria'}

    this.popservices.sendObjectSource(this.valorOk);
    this.popoverCtrl.dismiss({});
  }

}
