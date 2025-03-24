import { Component } from '@angular/core';
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home-page',
  imports: [LandingPageComponent, HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  isSideBarActive:boolean = false
}
