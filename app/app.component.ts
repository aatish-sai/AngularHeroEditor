import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}}</h2>
  <div>
    <label>id: </label>{{hero.id}}
  </div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
})
export class AppComponent  { 
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'windstrom'
  };
}

export class Hero{
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 3, name: 'three'},
  {id: 4, name: 'four'},
  {id: 5, name: 'five'},
  {id: 6, name: 'six'},
  {id: 7, name: 'seven'}
]