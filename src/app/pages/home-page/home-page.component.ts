import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from '../blog-page/blog-page.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CategoryPageComponent,
    BlogPageComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent{

  isSideBarActive: boolean = false;
  currentPage = { page: 'home' };

  view(view: any) {
    this.currentPage = view;
  }

  newsData: any = {};


}
