import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/bleach.interface';
import { bleachService } from '../services/bleach.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  get personajes(){
    return this.bleachService.personajes;
  }
  //@Input() personajes: Personaje[] = [];
  constructor(private bleachService: bleachService){
  }
}
