import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedSection = 1;

  constructor(public contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.fetchBlog();
  }
}
