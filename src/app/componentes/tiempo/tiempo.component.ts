import { Component, OnInit } from '@angular/core';
import { CronosComponent } from '../cronos/cronos.component';
import { CuentaAtrasComponent } from '../cuenta-atras/cuenta-atras.component';
import { NgModule, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css'],
  providers:[CronosComponent,CuentaAtrasComponent]
})
export class TiempoComponent implements OnInit {
 botonPadre:string="BOTÓN PADRE";
 
  constructor(
                        ) { }
 @ViewChild(CronosComponent)
 public cronos:CronosComponent;

 @ViewChild(CuentaAtrasComponent)
 public cuentaAtras:CuentaAtrasComponent;

  ngOnInit() {
  }

}
