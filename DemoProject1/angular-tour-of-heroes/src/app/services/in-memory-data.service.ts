import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  
  createDb() {
    const heroes_1 = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const heroes_2 = [
      { id: 1, name: 'Thur' },
      { id: 2, name: 'Locky' },
      { id: 3, name: 'Ironman' },
      { id: 4, name: 'Spiderman' },
      { id: 5, name: 'Batman' },
      { id: 6, name: 'Dynama' },
      { id: 7, name: 'Dr. IQ' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];
    return {heroes_1, heroes_2};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
