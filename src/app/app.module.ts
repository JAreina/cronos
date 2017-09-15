import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CronosComponent } from './componentes/tiempo/cronos/cronos.component';
import { CuentaAtrasComponent } from './componentes/tiempo/cuenta-atras/cuenta-atras.component';
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
