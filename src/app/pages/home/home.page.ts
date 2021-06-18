import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';

import { Pop1Page } from 'src/app/components/pop1/pop1.page';
import { Pop2Page } from 'src/app/components/pop2/pop2.page';
import { Pop3Page } from 'src/app/components/pop3/pop3.page';
import { Pop4Page } from 'src/app/components/pop4/pop4.page';
import { Pop5Page } from 'src/app/components/pop5/pop5.page';
import { Pop6Page } from 'src/app/components/pop6/pop6.page';
import { Pop7Page } from 'src/app/components/pop7/pop7.page';
import { Pop8Page } from 'src/app/components/pop8/pop8.page';
import { Pop9Page } from 'src/app/components/pop9/pop9.page';
import { Pop10Page } from 'src/app/components/pop10/pop10.page';
import { Pop11Page } from 'src/app/components/pop11/pop11.page';
import { Pop12Page } from 'src/app/components/pop12/pop12.page';
import { Pop13Page } from 'src/app/components/pop13/pop13.page';
import { Pop14Page } from 'src/app/components/pop14/pop14.page';
import { Pop15Page } from 'src/app/components/pop15/pop15.page';
import { Pop16Page } from 'src/app/components/pop16/pop16.page';
import { Pop17Page } from 'src/app/components/pop17/pop17.page';
import { Pop18Page } from 'src/app/components/pop18/pop18.page';
import { AppComponent } from 'src/app/app.component';

interface Asignaturas {
  icon:string;
  name: string;
  redirecTo: string;
  present:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit{

  asig: Asignaturas[] = [

    {
      icon: 'ribbon-outline',
      name:'Primaria',
      redirecTo:'/perfil',
      present: '1',
    },
    {
      icon: 'medal-outline',
      name:'Secundaria y Bachiller',
      redirecTo:'/perfil',
      present: '2'
    },
    {
      icon: 'school-outline',
      name:'Grado',
      redirecTo:'/perfil',
      present: '3'
    },
    {
      icon: 'terminal-outline',
      name:'Programación',
      redirecTo:'/perfil',
      present: '4'
    },
    {
      icon: 'earth-outline',
      name:'Idiomas',
      redirecTo:'/perfil',
      present: '5'
    },
    {
      icon: 'color-palette-outline',
      name:'Artes Plásticas',
      redirecTo:'/perfil',
      present: '6'
    },
    {
      icon: 'musical-notes-outline',
      name:'Música',
      redirecTo:'/perfil',
      present: '7'
    },
    {
      icon: 'restaurant-outline',
      name:'Cocina',
      redirecTo:'/perfil',
      present: '8'
    },
    {
      icon: 'accessibility-outline',
      name:'Baile',
      redirecTo:'/perfil',
      present: '9'
    },
    {
      icon: 'barbell-outline',
      name:'Belleza y Salud',
      redirecTo:'/perfil',
      present: '10'
    },
    {
      icon: 'car-sport-outline',
      name:'Mecánica',
      redirecTo:'/perfil',
      present: '11'
    },
    {
      icon: 'camera-outline',
      name:'Audiovisual',
      redirecTo:'/perfil',
      present: '12'
    },
    {
      icon: 'ticket-outline',
      name:'Teatro',
      redirecTo:'/perfil',
      present: '13'
    },
    {
      icon: 'ear-outline',
      name:'Lenguaje de signos',
      redirecTo:'/perfil',
      present: '14'
    },
    {
      icon: 'airplane-outline',
      name:'Viajes - Rutas',
      redirecTo:'/perfil',
      present: '15'
    },
    {
      icon: 'shirt-outline',
      name:'Moda - Costura',
      redirecTo:'/perfil',
      present: '16'
    },
    {
      icon: 'game-controller-outline',
      name:'Influencer - Gammer',
      redirecTo:'/perfil',
      present: '17'
    },
    {
      icon: 'telescope-outline',
      name:'Astronomía',
      redirecTo:'/perfil',
      present: '18'
    },
  ];

  ngOnInit() {
    this.app.darBoolTab(true);
  }

  constructor(public popoverController: PopoverController,
              public app: AppComponent) { }


  async presentPopover(ev: any, e: any) {
    let com;
    
    if(ev==1){com = Pop1Page;} 
    else if(ev==2){com=Pop2Page}
    else if(ev==3){com=Pop3Page}
    else if(ev==4){com=Pop4Page}
    else if(ev==5){com=Pop5Page}
    else if(ev==6){com=Pop6Page}
    else if(ev==7){com=Pop7Page}
    else if(ev==8){com=Pop8Page}
    else if(ev==9){com=Pop9Page}
    else if(ev==10){com=Pop10Page}
    else if(ev==11){com=Pop11Page}
    else if(ev==12){com=Pop12Page}
    else if(ev==13){com=Pop13Page}
    else if(ev==14){com=Pop14Page}
    else if(ev==15){com=Pop15Page}
    else if(ev==16){com=Pop16Page}
    else if(ev==17){com=Pop17Page}
    else if(ev==18){com=Pop18Page}

      const popover = await this.popoverController.create({
        
        component: com,
        event: e,
        translucent: true
        
      });
      await popover.present();
  }
}
