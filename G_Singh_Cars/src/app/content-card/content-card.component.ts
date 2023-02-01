import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 0,
      title: "Bugatti Mistral Roadster",
      description: "The Mistral is a one-of-a-kind wind that heralds the new seasons in southern France, stirring awe in all who experience it. A sublime inspiration, for the ultimate Roadster. The W16 MISTRAL embodies this and the spirit of BUGATTI, offering freedom, elegance, and speed with the incredible power of the iconic W16 engine.",
      creator: "Bugatti Automobiles S.A.S.",
      imgURL: "https://www.cnet.com/a/img/resize/c163b855f4f297808f2d7cbeece8d92b340450fb/hub/2022/08/12/80f55e69-b556-4992-9a1c-68ec38e265c5/bugatti-w16-mistral-roadster-117.jpg?auto=webp&width=1200",
      type: "Sport Car"
    });
    this.contentList.add({id: 1,
      title: "Range Rover Velar",
      description: "The Range Rover Velar ushers in a new design language for Land Rover that is influenced by Land Rover's previous design language that began with the Evoque and most recently was used in the Range Rover Sport. The new design language features smoother lines on the body, and emphasises sportiness and on-road ability, but more important is the new interior design language that begins with the Velar, which will later spread to other Range Rover models. ",
      creator: "Jaguar Land Rover",
      imgURL: "https://media.ed.edmunds-media.com/land-rover/range-rover-velar/2022/oem/2022_land-rover_range-rover-velar_4dr-suv_p400-r-dynamic-hse_fq_oem_1_815.jpg",
      type: "SUV Car"
    });
    this.contentList.add({id: 2,
      title: "Tesla Model 3",
      description: "The Tesla Model 3 is a compact executive sedan that is battery powered and produced by Tesla.[7] Limited production of the Model 3 began in mid-2017, with the first production vehicle rolling off the assembly line on July 7, 2017. The official launch and delivery of the first 30 cars took place on July 28.",
      creator: "Tesla Inc.",
      imgURL: "https://hips.hearstapps.com/hmg-prod/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg?crop=1xw:1xh;center,top&resize=2048:*",
      type: "Electeric Car"
    });
  }
}