import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  routeSubscription: Subscription;
  active = 1;
  isPrimaryHeader = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const splitURL = this.router.url.split('?')[0];
        this.isPrimaryHeader = splitURL !== '/developers/insights' && splitURL !== '/developers/supported-networks';
      });
  }
}
