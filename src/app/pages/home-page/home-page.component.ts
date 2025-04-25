import { Component, OnInit } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CategoryPageComponent } from '../category-page/category-page.component';
import { CommonModule } from '@angular/common';
import { BlogPageComponent } from '../blog-page/blog-page.component';
import { ApiService } from '../../services/api.service';
import { SharedService } from '../../services/shared.service';

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
export class HomePageComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  isSideBarActive: boolean = false;
  currentPage = { page: 'home' };

  newsData: any = {};

  ngOnInit(): void {
    this.sharedService.currentPage$.subscribe(
      (res) => {
        this.currentPage = res
      }
    );
  }
}
