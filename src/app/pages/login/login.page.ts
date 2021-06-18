import { Component} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  constructor(public app: AppComponent,
              public us: UserService) {}


  //Login Google
  onClick(){
      //this.app.darBoolTab(false); //<-- el Booleano para activar el tab está en home.page.ts
      this.us.login();
  }

  out(){
    this.us.logout();
  }

}
