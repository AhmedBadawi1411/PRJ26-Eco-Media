import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-two',
  imports: [],
  templateUrl: './card-two.component.html',
  styleUrl: './card-two.component.css'
})
export class CardTwoComponent {
  @Output() viewEmmiter = new EventEmitter<any>()
  onClick() {
    this.viewEmmiter.emit({page:'blog'})
  }
}
