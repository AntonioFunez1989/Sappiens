import { AfterContentChecked, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import 'firebase/auth'
import { ToastController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { UserI } from '../model/userI';
import { BehaviorSubject } from 'rxjs';

let userI: UserI;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public Collection: AngularFirestoreCollection<UserI>;
  public collect: AngularFirestoreCollection;
  public collectPop: AngularFirestoreCollection;

  constructor(public afAuth: AngularFireAuth,
              private router: Router,
              public toastController: ToastController,
              public db: AngularFirestore){}
 
    // OBJETO PARA PASAR DATOS DE UNA PAGINA A OTRA
    private dataSource = new BehaviorSubject("default message");
    serviceData = this.dataSource.asObservable();

    //METODO DEL OBJETO ANTERIOR PARA PASAR DATOS DE UNA PAGINA A OTRA
    changeData(data: any) {
      this.dataSource.next(data);
    }

    //COGER LA BASE DE DATOS DE LOS POPS
    cogerDBpop(){

          this.collectPop = this.db.collection('pops')
          this.collectPop.get().toPromise().then((querySnapshot) => {

              querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
                                                 
                });
            });
        }

// TRAEMOS EL USUARIO DEL METODO LOGIN, CON LAS CREDENCIALES DE LA AUTENTICACION DEL USUARIO EN GOOGLE, VERIFICAMOS SI EXISTE
// SI EXISTE, NAVEGAREMOS AL HOME Y ALLI PREGUNTAREMOS EL CURRENT USER
// SI NO EXISTE IREMOS A ADDUSER(), ESE METODO TRAS GUARGAR EN BBDD EL USUARIO NOS LLEVARÁ AL HOME
// SIEMPRE EN EL HOME, PREGUNTAREMOS EL CURRENTUSER
 async insertUserIfnotExist(us: UserI){ 

      var col = this.db.collection('users').doc(us.id);

      col.get().toPromise().then((doc) => {

        if(doc.exists){
          console.log('Existe')
          this.router.navigate(['/home']);
          this.presentToast(us.name);

        }else{
          console.log('No existe')
          this.addUser(us)
        }

      }).catch((error) => {
        console.log('Error en documento', error)
      })
  }

  async getUsICurrent(){
  
    let us: UserI
    let x: any;

    const ref = this.db.collection('users').doc(firebase.auth().currentUser.uid)
    await ref.get().toPromise().then((a) => {
       
        x = a.data()
        console.log('id es: ', x.id)
        return us
      
    }).catch((error) => {
      console.log('Error en documento', error)
    })
    return x

  }
  // AÑADIMOS EL USUARIO A LA BASE DE DATOS DE FIRESTORE, CON LOS DATOS QUE NOS DEVUELVE LA AUTENTICACION DE GOOGLE EN EL LOGIN() Y NAVEGAMOS AL HOME
  async addUser(user: UserI){ 
    
    const users = this.db.collection('users');

    await users.doc(user.id).set({
      
      id: user.id,
      name: user.name, 
      mail: user.mail, 
      number: user.number,
      photo: user.photo, 
      subjects: user.subjects,
      date: new Date(Date.now()),
      change:user.change,
      price1:user.price1,
      presential:user.presential,
      location: user.location,

    });

    this.router.navigate(['/home']);
    this.presentToast(user.name);

  }
  
  updateToDo(user: UserI){
    
    let uid = firebase.auth().currentUser.uid

    console.log('id: ',user.id, 'User Completo: ', user, 'UID: ', uid )

    const users = this.db.collection('users');
    users.doc(uid).update(user);
  }

  remove(uid: string){
    return this.Collection.doc(uid).delete();
  }
  
  //TOAST DE BIENVENIDA
  async presentToast(name: string) {
    const toast = await this.toastController.create({
    message: 'Bienvenido ' +name,
    duration: 2000});
    toast.present();
  }

  logout() {
    this.afAuth.signOut();
  } 

  //METODO PARA EL LOGGIN CON GOOGLE --> AUTH NOS TRAE UN USER DE GOOGLE QUE NOSOTROS SE LO METEMOS A USUARIO
  login() {

      this.afAuth.authState.subscribe( user => {

       if(!user){
        this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        return;
      }
      //CARGAMOS EN LA INTERFAZ USUARIO LOS DATOS QUE NOS TRAE LA AUTENTICACION DE GOOGLE, CON LOS DATOS DEL USUARIO
      
      this.insertUserIfnotExist(this.setUser(firebase.auth().currentUser))
    })                          
  }

  // Este es el UserI que creamos para meterlo en Add user por defecto si no existe ningun user
  setUser(user: any){

    if(user == null){
      this.logout()
      this.router.navigate(['/login'])
    }

    userI = {

      id : user.uid,
      name :  user.displayName,
      mail : user.email,
      number : user.phoneNumber,
      photo : user.photoURL,
      subjects:['Java'],
      date : new Date(Date.now()),
      change:false,
      price1:10,
      presential:true,
      location: 'null',
    }
    return userI
  }

  //METODO DESDE EL QUE COJO EL USUARIO CONCURRENTE
  getUser(){
    return this.setUser(firebase.auth().currentUser);
  }

  nombreAsig: string
  direc: string
  preMax: number
  preMin:number

  pasarEnFiltro(nombreAsig: any, direc: string, preMax: number, preMin: number){

      this.nombreAsig = nombreAsig
      this.direc = direc
      this.preMax = preMax
      this.preMin = preMin

      return this.nombreAsig, this.direc, this.preMax, this.preMin

  }

  /*
  crearBBDDpop(){

    popI = {

      primaria : {raiz:'Primaria',multitarea: 'Multitarea',lengua: 'Lengua',matematicas: 'Matemáticas',ingles:'Inglés'},

      secundariaBachiller:{ raiz:'Secndaria y Bachiller', multitarea:'Multitarea', lengua:'Lengua y Literatura', matematicas:'Matemáticas',
                            ingles:'Inglés', fisica:'Física y Química', historia:'Historia', dibujo:'Dibujo ténico'}, 
  
      grado:{ raiz:'Grado', matematicas:'Matemáticas', ingles:'Inglés', fisica:'Física', quimica:'Química', economia:'Economía', historia:'Historia'},
      programacion: { raiz:'Programación', java: 'Java', javaScript:'JavaScript', python: 'Python', html:'HTML', css: 'CSS',
                      angular:'Angular', ciberSeguridad:'Ciber Seguridad', sysAdmin: 'Sys Admin'},
  
      idiomas: {raiz: 'Idiomas',ingles:'Inglés',chino:'Chino', aleman:'Alemán', frances: 'Francés', japones: 'Japonés', portugues: 'Portugués', esperanto: 'Esperanto'},
      
      artes: {raiz: 'Artes Plásticas', pintura: 'Pintura', escultura: 'Escultura', talla: 'Talla'},

      musica:{raiz:'Música',guitarra_clasica: 'Guitarra Clásica', guitarra_acustica: 'Guitarra Acústica', guitarra_electrica: 'Guitarra Eléctrica', bateria: 'Batería',
              bajo: 'Bajo', chelo: 'Chelo'},

      cocina:{raiz:'Cocina',clasica: 'Cocina Clásica', autor: 'Cocina de Autor', reposteria: 'Repostería'},
  
      baile:{raiz:'Baile',danza_clasica:'Danza Clásica', baileSalon: 'Bailes de Salón', kapoeira: 'Capoeira', breakDance: 'Break Dance', oriental: 'Oriental'},

      belleza_salud:{ raiz:'Belleza y Salud',nutricion:'Nutrición', manicuraPedicura: 'Manicura y pedicura', maquillaje: 'Maquillaje', peluqueria: 'Peluquería',
                      entPersonal: 'Ent. Personal'},

    mecanica:{raiz: 'Mecánica', mecanica:'Mecánica', chapaPintura: 'Chapa y Pintura', electronica: 'Electrónica', mantenimiento:'Mantenimiento'},

    audiovisual:{raiz: 'Audio Visual', fotografia:'Fotografía', video:'Video'},

    teatro:{raiz: 'Teatro', teatro:'Teatro', improvisacion:'Improvisación', hablarPublico: 'Hablar en público'},
    
    lenguajeSignos:{raiz:'Lenguaje de Signos', braile: 'Braile', lenguajeSignos: 'Lenguaje de Signos'},
    
    viajesRutas:{raiz: 'Viajes y Rutas', profTurism: 'Prof. Turismo', rutas: 'Rutas'},
    
    modaCostura:{raiz: 'Moda - Costura', costura: 'Costura', personalShoper: 'Personal Shopper'},

    influencerGammer:{raiz:'Influencer - Gammer', gammer: 'Gammer', influencer: 'Influencer'},
        
    astronomia:{raiz:'Astronomía', astronomia:'Astronomía'}  
    }

    //EXPORTO LA INTERFAZ INICIALIZADA CON TODOS LOS DATOS
    //this.changeData(popI)
    

  }
*/
}
