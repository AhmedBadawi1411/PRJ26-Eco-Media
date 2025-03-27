import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardTwoComponent } from '../../components/card-two/card-two.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { CardOneComponent } from '../../components/card-one/card-one.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-category-page',
  imports: [
    CardTwoComponent,
    NewsCardComponent,
    CardOneComponent,
    CommonModule,
  ],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css',
})
export class CategoryPageComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {}
  @Input() category: string = 'news';
  @Output() currentView = new EventEmitter<any>();

  newsData: any = {};

  ngOnInit(): void {
    this.apiService.news$.subscribe((res) => (this.newsData = res));
  }

  emmitView(view: any) {
    this.currentView.emit(view);
  }

  changeCategory(category: string) {
    this.category = category;
  }

  displayDetailes(obj: any) {
    this.sharedService.previousPage = { page: 'category' };
    this.apiService.selectedObject = obj;
    this.sharedService.currentPage = { page: 'blog' };
  }
}
