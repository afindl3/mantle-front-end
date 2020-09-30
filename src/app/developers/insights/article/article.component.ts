import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ContactFormFields, ContactFormType } from '../../../shared/body-sections/contact-form/contact-form.component';
import { ContentfulService } from '../../../services/contentful/contentful.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  contactForm: ContactFormFields = {
    title: 'Subscribe to newsletter',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: ContactFormType.Newsletter,
  };
  id: number;
  article: any;
  numberOfArticles: number;
  relatedArticle1: any;
  relatedArticle2: any;
  private componentIsActive = true;

  constructor(public contentfulService: ContentfulService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.contentfulService.fetchBlog();

    combineLatest([this.route.params, this.contentfulService.blog$])
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(([params, blog]) => {
        this.id = +params.id;
        const index = this.id - 1;
        this.numberOfArticles = blog.length;
        this.article = blog[index];
        this.relatedArticle1 = blog[index - 1] ? blog[index - 1] : blog[blog.length - 1];
        this.relatedArticle2 = blog[index + 1] ? blog[index + 1] : blog[0];
      });
  }

  onClick(selectedArticle: string): void {
    window.scroll(0, 0);
    const index = this.id - 1;

    switch (selectedArticle) {
      case 'previous':
        this.router.navigate(['/developers/insights/article', index === 0 ? this.numberOfArticles : this.id - 1], {
          queryParamsHandling: 'merge',
        });
        break;
      case 'next':
        this.router.navigate(['/developers/insights/article', index === this.numberOfArticles - 1 ? 1 : this.id + 1], {
          queryParamsHandling: 'merge',
        });
        break;
    }
  }

  ngOnDestroy(): void {
    this.componentIsActive = false;
  }
}
