export class Person {

    id: string
    name: string
    mail:string
    number?:string
    photo?:string    

    constructor(i:string, n: string, m: string, num:string, ph:string) {

        this.id=i
        this.name=n
        this.mail=m
        this.number=num
        this.photo=ph

    }
}