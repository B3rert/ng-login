import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  nombreInput: string = "";
  claveInput: string = "";
  saveMyData = false;
  mostrarTexto: boolean = false;

  async login() {

    if (!this.nombreInput || !this.claveInput) {
      alert ("Por favor completa todos los campos para continuar")
      return
    }

    if (this.saveMyData) {
      //sesion permanente
    }
    else {
      //sesion no permanente
    }
  }

  //Permanencia de la sesión
  rememberMe() {
    this.saveMyData ? this.saveMyData = false : this.saveMyData = true;
  }
}
