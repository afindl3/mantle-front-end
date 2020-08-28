import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createClient, Entry } from 'contentful';

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

  constructor() {}

  async getProducts() {
    return this.client.getEntries();
  }
}
