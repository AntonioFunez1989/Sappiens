import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopServicesService {

  private objectSource = new BehaviorSubject<{}>({});
  $getObjectSource = this.objectSource.asObservable();

  constructor() { }

  sendObjectSource(data:string){
    this.objectSource.next(data);
  }

  changeData(data: any) {
    this.objectSource.next(data);
  }

}
