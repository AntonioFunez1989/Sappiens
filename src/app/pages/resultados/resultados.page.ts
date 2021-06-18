import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { UserI } from 'src/app/model/userI';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

   array : Person[] = [];

  constructor(public service: UserService,
              public router: Router,
              public db: AngularFirestore
              ) { }

  nombreAsig:string //RELLENO LOS DATOS CON -->  this.obtenerDatosDelServicio()
  direccion: string
  preMax: number
  preMin: number

  ngOnInit() {
    this.obtenerDatosDelServicio()
  }

  ionViewDidEnter(){

    this.datosParaIniciarBusqueda()

    this.array.length = 0;
    this.obtenerDatosDelServicio()

      const busqueda = this.busqueda5()

        busqueda.subscribe(a=>{

          a.forEach(e=>{
  
           let person = new Person(e.id, e.name, e.mail, e.number, e.photo)
  
          this.array.push(person)
  
            console.log('Dentro del bucle id: ',e.id, e.name)
          })
        })
  }

  // POBLACION
  busqueda2(){

    const dataCollection: AngularFirestoreCollection<UserI> = this.db.collection<UserI>('users',
    ref => ref.where('location', "==", this.direccion).orderBy('id','asc'));

    return dataCollection.valueChanges()
}

busqueda2Asignatura(){

  const dataCollection: AngularFirestoreCollection<UserI> = this.db.collection<UserI>('users',
  ref => ref.where('subjects', "==", this.nombreAsig).orderBy('id','asc'));

  return dataCollection.valueChanges()
}

// POBLACION Y ASIGNATURA
busqueda3(){

  const dataCollection: AngularFirestoreCollection<UserI> = this.db.collection<UserI>('users',
  ref => ref.where('location', "==", this.direccion).
  where('subjects', "==", this.nombreAsig).
  orderBy('id','asc'));

  return dataCollection.valueChanges()
}

// POBLACION, ASIGNATURA, PRECIOMAX 
busqueda4(){

  const dataCollection: AngularFirestoreCollection<UserI> = this.db.collection<UserI>('users',
  ref => ref.where('location', "==", this.direccion.toString()).
  where('subjects', "==", this.nombreAsig ).
  where('price1', '<=', this.preMax).
  orderBy('price1','asc'));
 
  return dataCollection.valueChanges()
}

busqueda5(){

    const dataCollection: AngularFirestoreCollection<UserI> = this.db.collection<UserI>('users',
    ref => ref.where('location', "==", this.direccion.toString()).
    where('subjects', "==", this.nombreAsig ).
    where('price1', '<=', this.preMax).
    where('price1', '>=', this.preMin).
    orderBy('price1','asc'));
   
    return dataCollection.valueChanges()

}

// SE LLAMA EN EL INIT PARA TRAER LOS DATOS DEL FILTRO ;)
obtenerDatosDelServicio(){
  try{
    this.nombreAsig = this.service.nombreAsig
    this.direccion = this.service.direc
    this.preMax = this.service.preMax
    this.preMin = this.service.preMin

  }catch(exception ){
    this.router.navigate(['/home'])
  }
}

 datosParaIniciarBusqueda(){

  if(this.direccion==null && this.nombreAsig ==null && this.preMax==null && this.preMin==null){
    this.router.navigate(['/home'])
  }

 }

}
