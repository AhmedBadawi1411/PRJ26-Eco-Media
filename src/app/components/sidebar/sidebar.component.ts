import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor() {
    this.currentPage.emit({page:'home'});
  }

  @Input() isActive:boolean = false;
  @Output() currentPage:any = new EventEmitter<any>();

  changePage(page:any){
    this.currentPage.emit(page)
  }
}
