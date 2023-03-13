import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LogosComponent } from './components/logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule //Forms Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
