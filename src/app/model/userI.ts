
export interface UserI {
  
    id: string,
    name?: string,
    mail?:string,
    number?:string,
    photo?:string,
    subjects?: Array<string> 

    date?:Date,
    change?:boolean;
    price1?:number,
    presential?:boolean,
    location?: string,

  }