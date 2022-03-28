import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/bleach.interface';

@Injectable()
export class bleachService{

    private _personajes: Personaje[] = [
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
        }
      ];
    
    get personajes(): Personaje[]{
        return [...this._personajes];
    }
    
    constructor(){
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }    
}
