import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent implements OnInit {

  

  ngOnInit() {
  }
  horas:any;
  minutos: any;
  segundos: any;
  inicioSegundos:any=5;
  milisegundos:any;
  isPaused: boolean;
  buttonLabel: string;
  control:any;

  constructor() {
    this.empezar();
  }
 
  empezar(){
    this.resetTimer();
    this.control=  setInterval(() => this.tick(), 10);
    this.togglePause();
  }


  resetTimer(): void {
    this.isPaused = true;
    this.horas=0;
    this.minutos = 0;
    this.segundos = this.inicioSegundos;
    this.milisegundos=99;
    this.buttonLabel = 'Botón hijo cuenta atrás';
  }
 
  private tick(): void {
    if (!this.isPaused) {
      if (--this.milisegundos < 0) {
         this.milisegundos = 99 }
      
      if (this.milisegundos ==0) {
        this.segundos--;
        if (this.minutos< 0) {
          this.resetTimer();
        }
        if(this.segundos ==0){
          clearInterval(this.control);
          this.milisegundos="0";
          
        }
      }
    }
  }
 
  togglePause(): void {
    this.isPaused = !this.isPaused;
    
  }
}
