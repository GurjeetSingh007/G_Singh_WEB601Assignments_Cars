import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { cardsArray } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": 'application/json'})
  } 

  constructor(private messageService: MessageService, private http: HttpClient) { }


  getContent(): Observable<Content[]>{
    this.messageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>("/api/cars");
  }

  getContentById(id: number): Observable<any> {
    const content = cardsArray.find(c => c.id === id);
    this.messageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }

  addContent(newCar: Content): Observable<Content>{
    this.messageService.addMessage("Content Added");
    return this.http.post<Content>("/api/cars", newCar, this.httpOptions);
  }
}
