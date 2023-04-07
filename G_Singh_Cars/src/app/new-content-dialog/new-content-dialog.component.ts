import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-content-dialog',
  templateUrl: './new-content-dialog.component.html',
  styleUrls: ['./new-content-dialog.component.scss']
})
export class NewContentDialogComponent {
  newCard: any = {};
  constructor(public dialogRef: MatDialogRef<NewContentDialogComponent>){}

  addCard(){
    this.dialogRef.close(this.newCard);
  }
}
