import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop3 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop3',
  templateUrl: './pop3.page.html',
  styleUrls: ['./pop3.page.scss'],
})
export class Pop3Page implements OnInit {

  iPop3: iPop3[] = [

    {
      icon: 'school-sharp',
      name:'Matemáticas',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'school-sharp',
      name:'Inglés',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'school-sharp',
      name:'Física',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'school-sharp',
      name:'Química',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'school-sharp',
      name:'Economía',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'school-sharp',
      name:'Historia',
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

    if(this.valorOk=='Matemáticas'){this.valorOk='Matemáticas'}
    else if(this.valorOk=='Inglés'){this.valorOk='Inglés nivel B1'}

    this.popservices.sendObjectSource(this.valorOk);

    this.popoverCtrl.dismiss({});
  }

}
