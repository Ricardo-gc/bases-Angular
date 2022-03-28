import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Personaje} from '../interfaces/bleach.interface';
import { bleachService } from '../services/bleach.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  @Input() nuevo: Personaje={
    nombre: '',
    poder: 0
  }
  constructor(private bleachService: bleachService){}
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return;}
    
    //this.onNuevoPersonaje.emit(this.nuevo);
    this.bleachService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
  
}
