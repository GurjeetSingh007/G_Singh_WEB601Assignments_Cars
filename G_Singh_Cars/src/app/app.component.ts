import { Component } from '@angular/core';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'G_Singh_Cars';
  contentId: number = 1;
  topContent: any = {}; 
  img: string ='https://preview.redd.it/9r1ytuzin9g61.png?width=960&crop=smart&auto=webp&v=enabled&s=4dc692d6a006cabfbb88793afd52e25e4332bbd6';

constructor(private CarsService: CarsService) {}

  log(){
    console.log(`ID:${this.topContent.id}`);
    console.log(`Title: ${this.topContent.title}`);
  }

  ngOnInit(){
    this.CarsService.getContentById(this.contentId).subscribe
    (content => this.topContent = content);
  }
}
