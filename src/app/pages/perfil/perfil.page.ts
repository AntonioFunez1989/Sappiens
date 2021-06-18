import { Component, OnInit, ViewChild} from '@angular/core';
import { UserI } from 'src/app/model/userI';

import firebase from 'firebase';
import 'firebase/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import { UserService } from 'src/app/services/user.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit{

  @ViewChild("placesRef2") placesRef : GooglePlaceDirective;
   
  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address.name);

    this.direccion=address.name

    return address.name
  }

  direccion: string
  userI:UserI
  a: any

  id: string
  name: string
  mail:string
  number:string
  photo:string
  subjects: Array<string> 
  date:Date
  change:boolean
  price1:number
  price2:number
  presential:boolean
  location: string


  constructor(public db: AngularFirestore,
              public router: Router,
              public userSer: UserService) {}

  ngOnInit(){
    
    try{
      this.getUser();
    }catch(exception ){
      this.router.navigate(['/login'])
    }
  }

  ionViewDidEnter(){

    try{
      this.getUser();
    }catch(exception ){
      this.router.navigate(['/login'])
    }
  }

  getUser(){
   
    let uid = firebase.auth().currentUser.uid

    if(uid == null){
      this.router.navigate(['/login'])
    }
    else{

      var col = this.db.collection('users').doc(uid);

      col.get().subscribe((doc) =>{
  
        this.a = doc.data()
        
        this.id = this.a.id
        this.name = this.a.name
        this.mail = this.a.mail 
        this.number = this.a.number
        this.photo = this.a.photo
        this.subjects = this.a.subjects
        this.date= this.a.date
        this.change = this.a.change
        this.price1 = this.a.price1
        this.price2 = this.a.price2
        this.presential = this.a.presential
        this.location = this.a.location
  
      })
    }
  }

  boolPresential = true

  segmentChanged(ev: any){

    let bol = ev.detail.value

    console.log(bol)

      if(bol == 'true'){
        this.boolPresential = false
      }else if(bol == 'false'){
        this.boolPresential = true
      }else if(bol == 'ambos'){
        this.boolPresential=true
      }
  }

  //VARIABLES PARA CASTEAR
  numero:string
  numeroCast: number

  update(){

  this.numero = this.price1.toString()
  this.numeroCast = parseInt(this.numero, 10)  

    this.userI = {

      id : this.id,
      name : this.name,
      mail : this.mail,
      number : this.number,
      photo : this.photo,
      subjects : this.subjects,
      date: new Date(Date.now()),
      change : this.change,
      price1: this.numeroCast, //VARIABLE CASTEADA
      presential : this.presential,
      location: this.direccion

    }
    this.userSer.updateToDo(this.userI)
  }

}
