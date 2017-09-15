import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CronosComponent } from './componentes/cronos/cronos.component';
import { CuentaAtrasComponent } from './componentes/cuenta-atras/cuenta-atras.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

@NgModule({
  declarations: [
    AppComponent,
    CronosComponent,
    CuentaAtrasComponent,
    TiempoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
