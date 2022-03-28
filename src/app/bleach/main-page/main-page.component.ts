import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/bleach.interface';
import { bleachService } from '../services/bleach.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Gin',
    poder: 1000
  }
  
  constructor(){}
}
