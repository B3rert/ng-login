import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //input nombre [(ngModel)]
  nombreInput: string = "";
  //input contraseña [(ngModel)]
  claveInput: string = "";
  //check box save data [(ngModel)]
  saveMyData = false;
  //Hiden text password
  mostrarTexto: boolean = false;

  //Function login
  login() {

    //valid void or empty inputs
    if (!this.nombreInput || !this.claveInput) {
      alert ("Por favor completa todos los campos para continuar")
      return
    }

    //Inputs isNotempty
    //Valid user

    if (this.saveMyData) {
      //sesion permanente
    }
    else {
      //sesion no permanente
    }
  }

}
