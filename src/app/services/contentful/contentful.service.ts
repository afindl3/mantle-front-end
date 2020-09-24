import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { BehaviorSubject } from 'rxjs';

/*
  Contentful State Store Service -
  Any page that requires a specific content type will first check if the content type exists as an observable
  in the state store and otherwise fetch the content type directly from contentful
  */

const CONFIG = {
  space: '7pp8bgnb5ioi',
  accessToken: 'G_DfQhch4pbwlmfH1NpP1D7n1-0bIqjKwSjbFmRavjs',
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  private readonly _environmentVariables = new BehaviorSubject<any>([]);
  private readonly _faqs = new BehaviorSubject<any[]>([]);
  private readonly _milestones = new BehaviorSubject<any[]>([]);
  private readonly _team = new BehaviorSubject<any[]>([]);
  private readonly _blog = new BehaviorSubject<any[]>([]);

  readonly environmentVariables$ = this._environmentVariables.asObservable();
  readonly faqs$ = this._faqs.asObservable();
  readonly milestones$ = this._milestones.asObservable();
  readonly team$ = this._team.asObservable();
  readonly blog$ = this._blog.asObservable();

  get environmentVariables(): any {
    return this._environmentVariables.getValue();
  }
  set environmentVariables(val: any) {
    this._environmentVariables.next(val);
  }
  get faqs(): any[] {
    return this._faqs.getValue();
  }
  set faqs(val: any[]) {
    this._faqs.next(val);
  }
  get milestones(): any[] {
    return this._milestones.getValue();
  }
  set milestones(val: any[]) {
    this._milestones.next(val);
  }
  get team(): any[] {
    return this._team.getValue();
  }
  set team(val: any[]) {
    this._team.next(val);
  }
  get blog(): any[] {
    return this._blog.getValue();
  }
  set blog(val: any[]) {
    this._blog.next(val);
  }

  constructor() {}

  async fetchEnvironmentVariables() {
    if (this.environmentVariables.length === 0) {
      const entries = await this.client.getEntries({
        content_type: 'environmentVariables',
      });
      console.log(entries.items[0].fields);
      this.environmentVariables = entries.items[0].fields;
    }
  }

  async fetchBlog() {
    if (this.blog.length === 0) {
      const fetchedArticles = [];
      const entries = await this.client.getEntries({
        content_type: 'blog',
        order: 'fields.order',
      });
      entries.items.forEach((item) => {
        fetchedArticles.push(item.fields);
      });
      console.log(fetchedArticles);
      this.blog = fetchedArticles;
    }
  }

  async fetchFaqs() {
    if (this.faqs.length === 0) {
      const fetchedFaqs = [];
      const entries = await this.client.getEntries({
        content_type: 'faq',
        order: 'fields.order',
      });
      entries.items.forEach((item) => {
        fetchedFaqs.push(item.fields);
      });
      console.log(fetchedFaqs);
      this.faqs = fetchedFaqs;
    }
  }

  async fetchMilestones() {
    if (this.milestones.length === 0) {
      const fetchedMilestones = [];
      const entries = await this.client.getEntries({
        content_type: 'milestone',
        order: 'fields.order',
      });
      entries.items.forEach((item) => {
        fetchedMilestones.push(item.fields);
      });
      console.log(fetchedMilestones);
      this.milestones = fetchedMilestones;
    }
  }

  async fetchTeam() {
    if (this.team.length === 0) {
      const fetchedTeam = [];
      const entries = await this.client.getEntries({
        content_type: 'team',
        order: 'fields.order',
      });
      entries.items.forEach((item) => {
        fetchedTeam.push(item.fields);
      });
      console.log(fetchedTeam);
      this.team = fetchedTeam;
    }
  }
}
