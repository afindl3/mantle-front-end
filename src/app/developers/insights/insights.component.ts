import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/contact-form/contact-form.component';
import { ContentfulService } from '../../services/contentful/contentful.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent implements OnInit {
  contactForm: ContactFormFields = {
    title: 'Subscribe to newsletter',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    type: ContactFormType.Newsletter,
  };

  constructor(public contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.fetchBlog();
  }
}
