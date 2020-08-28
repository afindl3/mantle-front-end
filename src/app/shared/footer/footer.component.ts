import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  routeSubscription: Subscription;
  header1 = 'Ready for Mantle?';
  subheader1 = 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt';
  header2 = "Don't see your preferred network?";
  subheader2 = 'Get in touch with us and request the blockchain network you have in mind';
  isPrimaryContent = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const splitURL = this.router.url.split('?')[0];
        this.isPrimaryContent = splitURL !== '/developers/supported-networks';
      });
  }
}
