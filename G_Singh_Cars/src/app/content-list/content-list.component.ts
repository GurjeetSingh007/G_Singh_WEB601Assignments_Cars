import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  cards: Content[];
  titleValue: string = '';
  isTitleFound: boolean | null = null;
  img: string ='https://preview.redd.it/9r1ytuzin9g61.png?width=960&crop=smart&auto=webp&v=enabled&s=4dc692d6a006cabfbb88793afd52e25e4332bbd6';

  titleSearch(){
    this.isTitleFound = this.cards.some(card => card.title.toLowerCase() === this.titleValue.toLowerCase());
  }

  addCard(newCard: any){
    this.cards.push(newCard);
    this.cards= [...this.cards];
    console.log("Your card is added")
  }

  constructor(){
    this.cards = [
      {
        id: 0,
        title: "Ford Mustang",
        description: "The Ford Mustang is a series of American automobiles manufactured by Ford. In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate. ",
        creator: "Ford Inc.",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/2018_Ford_Mustang_GT_5.0.jpg/1024px-2018_Ford_Mustang_GT_5.0.jpg",
        type: "Muscle Car",
        tags: ["Mustang","Ford","Muscle"]
      },
      {
        id: 1,
        title: "Dodge Challanger",
        description: "The Dodge Challenger is the name of three different generations of automobiles (two of those being pony cars) produced by American automobile manufacturer Dodge. However, the first use of the Challenger name by Dodge was in 1959 for marketing a value version of the full-sized Coronet Silver Challenger. ",
        creator: "Dodge Inc.",
        
        type: "Muscle Car"
      },
      {
        id: 2,
        title: "Dodge Viper",
        description: "The Dodge Viper is a sports car that was manufactured by Dodge (by SRT for 2013 and 2014), a division of American car manufacturer FCA US LLC from 1992 until 2017, having taken a brief hiatus in 2007 and from 2010 to 2012. Production of the two-seat super car began at New Mack Assembly Plant in 1991 and moved to Conner Avenue Assembly Plant in October 1995.",
        creator: "Dodge Inc.",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Aewroi.jpg/1024px-Aewroi.jpg",
        type: "Sports Car"
      },
      {
        id: 3,
        title: "Audi A6",
        description: "The Audi A6 is an executive car made by the German automaker Audi. Now in its fifth generation, the successor to the Audi 100 is manufactured in Neckarsulm, Germany, and is available in saloon and estate configurations, the latter marketed by Audi as the Avant. ",
        creator: "Audi Inc.",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/2018_Audi_A6_Sport_40_TDi_S-A_2.0.jpg/1280px-2018_Audi_A6_Sport_40_TDi_S-A_2.0.jpg",
        type: "Sports Car"
      },
      {
        id: 4,
        title: "BMW i8",
        description: "The BMW i8 is a plug-in hybrid sports car developed by BMW. The i8 was part of BMW's electrified fleet and was marketed under the BMW i sub-brand. The production version of the BMW i8 was unveiled at the 2013 Frankfurt Motor Show and was released in Germany in June 2014. Deliveries to retail customers in the U.S. began in August 2014.[13] A roadster variant was launched in May 2018.[14] Production ended in June 2020.",
        creator: "BMW Inc.",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/1280px-2016_BMW_i8.jpg",
        type: "Electric Car"
      },
      {
        id: 5,
        title: "Mercedes-Benz S-Class",
        description: "The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for special class, abbreviated as S-Klasse), is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz, a division of the German company Mercedes-Benz. The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially introduced in 1972 with the W116, and has remained in use ever since. The S-Class is the flagship vehicle for Mercedes-Benz. ",
        creator: "Mercedes Inc.",
        
      },
      {
        id: 6,
        title: "Mercedes-Benz G-Class",
        description: "The Mercedes-Benz G-Class, sometimes colloquially called the G-Wagen[3] (as an abbreviation of Geländewagen) is a four-wheel drive automobile manufactured by Magna Steyr (formerly Steyr-Daimler-Puch) in Austria and sold by Mercedes-Benz. Originally developed as a military off-roader, later more luxurious models were added to the line. In certain markets, it has been sold under the Puch name as Puch G until 2000. ",
        creator: "Mercedes Inc.",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Gklass.jpg/1024px-Gklass.jpg",
      },
    ]
  }

  log(card: any){
    console.log(`ID: ${card.id}`);
    console.log(`Title: ${card.title}`);
  }

}
