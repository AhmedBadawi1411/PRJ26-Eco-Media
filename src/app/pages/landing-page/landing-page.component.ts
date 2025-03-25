import { Component, EventEmitter, Output } from '@angular/core';
import { CardOneComponent } from "../../components/card-one/card-one.component";
import { CardTwoComponent } from "../../components/card-two/card-two.component";
import { NewsCardComponent } from "../../components/news-card/news-card.component";
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule ,CardOneComponent, CardTwoComponent, NewsCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private apiService: ApiService) {
    this.apiService.news$.subscribe((res) => (this.newsData = res.news));
  }

  @Output() currentView = new EventEmitter<any>();
  
  emmitView(view:any){
    this.currentView.emit(view)
  }

  newsData: any = {};

  ngOnInit(): void {
    this.apiService.news$.subscribe((res) => (this.newsData = res.news));
  }
}
