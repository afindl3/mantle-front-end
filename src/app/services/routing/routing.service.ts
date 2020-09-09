import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  routeSubscription: Subscription;
  private readonly _routeSegments = new BehaviorSubject<string[]>([]);
  readonly roouteSegments$ = this._routeSegments.asObservable();

  get routeSegments(): string[] {
    return this._routeSegments.getValue();
  }
  set routeSegments(val: string[]) {
    this._routeSegments.next(val);
  }

  constructor(private router: Router) {
    this.routeSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let routeSegments = this.router.url.split('?')[0].split('/');
      routeSegments.shift();
      routeSegments = routeSegments.map((route) => route.replace(/-/g, ' '));
      this.routeSegments = routeSegments;
    });
  }

  getRouteSegments(): string[] {
    console.log(this.routeSegments);
    return this.routeSegments;
  }
}
