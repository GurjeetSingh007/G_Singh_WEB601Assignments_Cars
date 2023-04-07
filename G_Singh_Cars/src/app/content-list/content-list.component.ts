import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  cards: Content[] = []; 
  titleValue: string = '';
  isTitleFound: boolean | null = null;
  img: string ='https://preview.redd.it/9r1ytuzin9g61.png?width=960&crop=smart&auto=webp&v=enabled&s=4dc692d6a006cabfbb88793afd52e25e4332bbd6';

  titleSearch(){
    this.isTitleFound = this.cards.some(card => card.title.toLowerCase() === this.titleValue.toLowerCase());
  }

  constructor(private CarsService: CarsService){

  }

  log(card: any){
    console.log(`ID: ${card.id}`);
    console.log(`Title: ${card.title}`);
  }
  addCard(newCard: Content){
    this.CarsService.addContent(newCard).subscribe( newCardFromServer => {
      this.cards.push(newCardFromServer);
      this.cards = [...this.cards];
    })
  }

  ngOnInit(){
    this.CarsService.getContent().subscribe(cards => this.cards = cards);
  }

}
