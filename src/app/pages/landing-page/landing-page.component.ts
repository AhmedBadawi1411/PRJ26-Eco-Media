import { Component, EventEmitter, Output } from '@angular/core';
import { CardOneComponent } from "../../components/card-one/card-one.component";
import { CardTwoComponent } from "../../components/card-two/card-two.component";
import { NewsCardComponent } from "../../components/news-card/news-card.component";

@Component({
  selector: 'app-landing-page',
  imports: [CardOneComponent, CardTwoComponent, NewsCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Output() currentView = new EventEmitter<any>();
  emmitView(view:any){
    this.currentView.emit(view)
  }
}
