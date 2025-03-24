import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  imports: [
    CommonModule
  ],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {
  @Input() type = 1
  data = {
    one: {
      title:'النشرة الإخبارية',
      body:'إبق علي اضطلاع بالأخبار والإلهام من خط الطابقين الطبيعي',
    },
    two: {
      title:'نحن منظمة غير ربحية',
      body:'ساعدنا في سرد قصص مؤثرة عن فقدان التنوع البيولوجي وتغير المناخ والمزيد',
    }
  }
}
