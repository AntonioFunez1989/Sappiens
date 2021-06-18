import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopServicesService } from 'src/app/services/popservices.service';

interface iPop4 {
  icon:string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-pop4',
  templateUrl: './pop4.page.html',
  styleUrls: ['./pop4.page.scss'],
})
export class Pop4Page implements OnInit {

  iPop4: iPop4[] = [

    {
      icon: 'desktop',
      name:'Java',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-javascript',
      name:'JavaScript',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-python',
      name:'Python',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-html5',
      name:'HTML 5',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-css3',
      name:'CSS3',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-angular',
      name:'Angular',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'logo-rss',
      name:'Ciber Seguridad',
      redirecTo:'/filtro-profe'
    },
    {
      icon: 'cog',
      name:'SysAdmin',
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
