import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { cardsArray } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private messageService: MessageService) { }


  getContent(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return of(cardsArray);
  }

  getContentById(id: number): Observable<any> {
    const content = cardsArray.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}
