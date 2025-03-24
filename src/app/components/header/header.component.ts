import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() isActiveEmmiter = new EventEmitter<boolean>(false);
  isActive:boolean = false;

  sidebarToggler() {
    this.isActive = !this.isActive;
    this.isActiveEmmiter.emit(this.isActive);
  }
}
