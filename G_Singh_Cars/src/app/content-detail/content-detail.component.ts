import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  card : any = {};
  img: string ='https://preview.redd.it/9r1ytuzin9g61.png?width=960&crop=smart&auto=webp&v=enabled&s=4dc692d6a006cabfbb88793afd52e25e4332bbd6';

  constructor(private route:ActivatedRoute, private carsService: CarsService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.carsService.getContentById(this.id).subscribe(car => this.card = car);
    })
  }

  log(card: any){
    console.log(`ID: ${card.id}`);
    console.log(`Title: ${card.title}`);
  }
}
