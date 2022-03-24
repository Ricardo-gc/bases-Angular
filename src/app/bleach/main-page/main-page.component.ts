import { Component, OnInit } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Renji', 
      poder: 90000
    },
    {
      nombre: 'Kon',
      poder: 90
    },
    {
      nombre: 'Aizen',
      poder: 999999
    },
    {
      nombre: 'Ulquiorra',
      poder: 90000
    },
    {
      nombre: 'Barragan',
      poder: 738490
    },

  ]
  nuevo: Personaje={
    nombre: '',
    poder: 0
  }
  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }else{

      this.personajes.push(this.nuevo);
      this.nuevo = {
        nombre: '',
        poder: 0
      }
    }
  }

}
