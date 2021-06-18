import { Component, OnInit, ViewChild } from '@angular/core';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import { PopServicesService } from 'src/app/services/popservices.service';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { UserService } from 'src/app/services/user.service';

interface optionsPago {
  nombre:string;
  icon: string;
}

interface optionsLugar{
  nombreLugar: string;
  iconoLugar: string;
}


@Component({
  selector: 'app-filtro-profe',
  templateUrl: './filtro-profe.page.html',
  styleUrls: ['./filtro-profe.page.scss'],
})

export class FiltroProfePage implements OnInit {

    @ViewChild("placesRef") placesRef : GooglePlaceDirective;
   
    // API DIRECCION
    public handleAddressChange(address: Address) {
    this.direccion = address.name.toString()
}

  //Booleano para desplegar el pago
  boolOpcionOne = false;

        //Booleano para la forma de pago
        boolPago = true;

  //Booleano para desplegar la ubicacion
  boolOpcionTwo = false;
      //Booleano para la ubicacion
      boolUbi = false;

  optPago: optionsPago[] = [

    {
      nombre:'Pagado',
      icon:'cash-outline'
    },
    {
      nombre:'Intercambio',
      icon:'repeat-outline'
    },
  ];

  optLugar: optionsLugar[] = [

    {
      nombreLugar:'Online',
      iconoLugar:'desktop-outline',
    },
    {
      nombreLugar:'Presencial',
      iconoLugar:'home-outline',
    },
  ];

  constructor(private popservices: PopServicesService,
              public router: Router,
              public ser: UserService) { }

  info:any;
  evento:String;

  //VARIABLES PARA REALIZAR LA BUSQUEDA
      nombreAsignatura: any; // Lo cojo en el metodo ngOnInit()
      precioMin: number;        // Lo cojo de rangeChanged(ev: any)   
      precioMax: number;        // Lo cojo de rangeChanged(ev: any)
      direccion: string ;       // Lo cojo en el metodo  handleAddressChange()

  ngOnInit() {

    this.popservices.$getObjectSource.subscribe(data => {

      this.info=data;

      if(Object.entries(data).length === 0){
        this.router.navigate(['/home'])
        this.info='Vuelva atras, seleccione una opción'
      }else if(this.info!=null){
        this.nombreAsignatura = data
        this.info = 'Teacher de '+data;
      }
    });
  }

  numero1 = false;

  //Cambio de iconos
  iconoFlecha = "chevron-forward-outline";
  iconoFlechaMOD = "chevron-forward-outline";

  //color faldones
  color1="primary";
  color2="primary";

  //Color letras e iconos
  color_1="primary";
  color_2="primary";

  pago(){

    if(this.numero1==false){
      this.numero1=true;
      this.boolPago = true;
      this. iconoFlecha = "chevron-down-outline";
      this.color1="dark";
      document.getElementById('idPago').style.fontSize = '150%';
      

    }else if(this.numero1==true){
      this.numero1=false;
      this.iconoFlecha = "chevron-forward-outline";
      this.color1="primary";
      document.getElementById('idPago').style.fontSize = '100%';
      console.log(this.numero1);
    }
  }

  numero2 = false;

  modo(){

    if(this.numero2==false){
      this.numero2=true;
      this.boolUbi = false;
      this.iconoFlechaMOD = "chevron-down-outline";
      document.getElementById('idMod').style.fontSize = '150%';
      this.color2="dark";


    }else if(this.numero2==true){
      this.numero2=false;
      this.iconoFlechaMOD = "chevron-forward-outline";
      this.color2="primary";
      document.getElementById('idMod').style.fontSize = '100%';
      console.log(this.numero1);
    }
  }
  
    segmentChangedPay(ev: any) {
      
      this.evento = ev.detail.value;
      
      if (this.evento=='Intercambio') {
        console.log('Intercambio');
        this.boolPago=false;

      }else if (this.evento=='Pagado') {
        console.log('Pagado');
        this.boolPago=true;
      }

    }

    segmentChanged(ev: any) {
      
      this.evento = ev.detail.value;
      
      if (this.evento=='Presencial') {
        console.log('Presencial');
        this.boolUbi = true;

      }else if (this.evento=='Online') {
        console.log('Online');
        this.boolUbi = false;
      }
    }

    rangeChanged(ev: any){
      this.precioMin = ev.detail.value.lower
      this.precioMax = ev.detail.value.upper
    }

    pasarPag(){

      //console.log(  'Nombre Asignatura: ', this.nombreAsignatura,
      //              'Direccion', this.direccion,
      //              'Precio Min: ', this.precioMin, 'Precio Max: ', this.precioMax)
      this.ser.pasarEnFiltro(this.nombreAsignatura, this.direccion, this.precioMax, this.precioMin)

      this.router.navigate(['/resultados'])

    }

}