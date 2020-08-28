import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './services/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mantle-front-end';

  constructor(private contentfulService: ContentfulService) {}

  async ngOnInit() {
    const data = await this.contentfulService.getProducts();
  }

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }
}
