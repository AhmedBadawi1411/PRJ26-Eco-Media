import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-one',
  imports: [],
  templateUrl: './card-one.component.html',
  styleUrl: './card-one.component.css'
})
export class CardOneComponent {
  @Output() viewEmmiter = new EventEmitter<any>()
  onClick() {
    this.viewEmmiter.emit({page:'blog'})
  }
}
