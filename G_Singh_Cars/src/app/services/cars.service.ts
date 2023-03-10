import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { cardsArray } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }


  getContent(): Observable<Content[]>{
       return of(cardsArray);
  }

  getContentById(id: number): Observable<any> {
    const content = cardsArray.find(c => c.id === id);
      return of(content);
  }
}
