import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { NewContentDialogComponent } from '../new-content-dialog/new-content-dialog.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCard: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(NewContentDialogComponent).afterClosed().subscribe(newCard => {
      this.newCard = newCard;
      this.addCard();
    });
  }
  addCard(){
    this.onCreation.emit(this.newCard);
    this.newCard = {};
  }
}
