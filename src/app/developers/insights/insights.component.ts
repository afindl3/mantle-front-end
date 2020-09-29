import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactFormFields, ContactFormType } from '../../shared/body-sections/contact-form/contact-form.component';
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
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: ContactFormType.Newsletter,
  };

  constructor(public contentfulService: ContentfulService, private router: Router) {}

  ngOnInit(): void {
    this.contentfulService.fetchBlog();
  }

  onClick(selectedArticle: number) {
    console.log(selectedArticle);
    this.router.navigate(['/developers/insights/article', selectedArticle], { queryParamsHandling: 'merge' });
  }
}
