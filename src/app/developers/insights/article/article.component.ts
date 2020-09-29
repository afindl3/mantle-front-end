import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactFormFields, ContactFormType } from '../../../shared/body-sections/contact-form/contact-form.component';
import { ContentfulService } from '../../../services/contentful/contentful.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  id = 0;
  private routeSubscription: Subscription;
  contactForm: ContactFormFields = {
    title: 'Subscribe to newsletter',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: ContactFormType.Newsletter,
  };
  article: any;
  relatedArticle1: any;
  relatedArticle2: any;

  constructor(public contentfulService: ContentfulService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.id = +params.id; // (+) converts string 'id' to a number
    });
    this.contentfulService.blog$.subscribe((blog) => {
      this.article = blog[this.id];
      this.relatedArticle1 = blog[this.id + 1] ? blog[this.id + 1] : blog[0];
      this.relatedArticle1 = blog[this.id - 1] ? blog[this.id - 1] : blog[blog.length - 1];
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
