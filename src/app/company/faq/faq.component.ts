import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services/contentful/contentful.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  selectedFaq = 0;

  constructor(public contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.fetchFaqs();
  }

  onClick(index: number) {
    this.selectedFaq = index;
  }
}
