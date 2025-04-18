import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ApiService } from './services/api.service';
import { MaintainenceComponent } from "./pages/maintainence/maintainence.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, MaintainenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'eco-media';

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
    this.apiService.getNews();
  }
}
