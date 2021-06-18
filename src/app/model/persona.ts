import { UserI } from "./userI"

export class Persona {

    id: string
    name: string
    mail:string
    number:string
    photo:string
    subjects: Array<string> 

    date:Date
    change:boolean
    price1:number
    presential:boolean
    location: string
    

    constructor() {

    }

 
    cogerUsuaioPorInterfaz(userI: UserI){
        this.id = userI.id
        this.name = userI.name
        this.mail = userI.mail
        this.number = userI.number
        this.photo = userI.photo
        this.subjects = userI.subjects
        this.date = userI.date
        this.price1 = userI.price1
        this.presential = userI.presential
        this.location = userI.location
    }

    cogerUsuario(i:string, n:string, m:string, num: string, ph:string, sub: string[], dat: Date, pr1: number, pre: boolean, loc:string){
        this.id = i
        this.name = n
        this.mail = m
        this.number = num
        this.photo = ph
        this.subjects = sub
        this.date = dat
        this.price1 = pr1
        this.presential = pre
        this.location = loc
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


}