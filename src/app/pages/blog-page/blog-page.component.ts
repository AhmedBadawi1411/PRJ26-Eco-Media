import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-blog-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent implements OnInit {
  data: any = {};
  objectKeys = Object.keys;
  category = '';

  constructor(private api: ApiService, private sharedService: SharedService) {}
  ngOnInit(): void {
    this.api.selectedObject$.subscribe(
      (res) => {
      this.data = res.data
      this.category = res.type 
    });
  }

  regexPattern = /^(?:\d+\.\s+[\p{L}\s]+|[\p{L}\s]+:)\s*$/u;
  regexPatternTwo= /^(?:\d+\.\s+[\p{L}\s]+|[\p{L}\s]+[0-9]+:)\s*$/u;
  regexPatternThree= /^[\p{L}\s]+:\s*[\p{L}\s]+$/u;

  isSubtitle(p:string) {
    return this.regexPattern.test(p) || this.regexPatternTwo.test(p) || this.regexPatternThree.test(p);
  }
}
