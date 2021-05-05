import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../services/contentful/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedSection = 1;

  constructor(public contentfulService: ContentfulService, private router: Router) { }

  ngOnInit(): void {
    this.contentfulService.fetchBlog();
  }

  onClick(selectedArticle: number): void {
    this.router.navigate(['/developers/insights/article', selectedArticle + 1], { queryParamsHandling: 'merge' });
  }
}
