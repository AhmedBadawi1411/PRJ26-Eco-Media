import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardTwoComponent } from "../../components/card-two/card-two.component";
import { NewsCardComponent } from "../../components/news-card/news-card.component";
import { CardOneComponent } from "../../components/card-one/card-one.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-page',
  imports: [CardTwoComponent, NewsCardComponent, CardOneComponent, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  @Input() category: string = 'news'
  @Output() currentView = new EventEmitter<any>();
  emmitView(view:any){
    this.currentView.emit(view)
  }
  
  changeCategory(category:string) {
    this.category = category
  }
}
