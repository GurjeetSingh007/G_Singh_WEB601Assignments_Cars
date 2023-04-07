import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCard: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  addCard(){
    this.onCreation.emit(this.newCard);
    this.newCard = {};
  }
}
