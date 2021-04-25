import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RequestAccessComponent } from '../../modals/request-access/request-access.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  routeSubscription: Subscription;
  isPrimaryHeader = true; // Light header
  showMobileMenu = false;

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const splitURL = this.router.url.split('?')[0];
      this.isPrimaryHeader = splitURL !== '/developers/insights' && splitURL !== '/developers/supported-networks';
    });
  }

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  onClick(route: string) {
    this.showMobileMenu = false;
    this.router.navigate([route], { queryParamsHandling: 'merge' });
  }

  openAccessModal() {
    const modalRef = this.modalService.open(RequestAccessComponent);
    modalRef.result
      .then((result) => {
        // Result is either 'success' or 'error'
        if (result === 'error') {
          console.log('TODO: ROUTE TO ERROR PAGE');
        }
      })
      .catch((dismissed) => {
        console.log('Request access form escaped');
      });
  }
}
