import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopI } from 'src/app/model/pops';
import { PopServicesService } from 'src/app/services/popservices.service';
import { UserService } from 'src/app/services/user.service';

interface iPop1 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop1',
  templateUrl: './pop1.page.html',
  styleUrls: ['./pop1.page.scss'],
})
export class Pop1Page implements OnInit {

  iPop1: iPop1[] = [

    {
      icon: 'ribbon',
      name:'Multitarea',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ribbon',
      name:'Lengua',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ribbon',
      name:'Matemáticas',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'ribbon',
      name:'Inglés',
      redirecTo:'/filtro-profe'
    }
  ]

  popI:PopI
  sentData: any;

  constructor( 
    private popoverCtrl: PopoverController,
    private popservices: PopServicesService) {
    }

  ngOnInit() {}

  valorOk: string;

  onClick(valor: string){

    this.valorOk=valor;

    if(this.valorOk=='Multitarea'){this.valorOk = 'Primaria'}
    else if(this.valorOk=='Lengua'){this.valorOk='Lengua nivel primaria'}
    else if(this.valorOk=='Matemáticas'){this.valorOk='Matemáticas nivel primaria'}
    else if(this.valorOk=='Inglés'){this.valorOk='Inglés nivel primaria'}

      this.popservices.sendObjectSource(this.valorOk);
      this.popoverCtrl.dismiss({});
  }
}
