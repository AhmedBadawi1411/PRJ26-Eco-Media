import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent implements OnInit{
  data:any={}
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.api.selectedObject$.subscribe(
      res => this.data = res
    )
    console.log(this.data);
    
  }
}
