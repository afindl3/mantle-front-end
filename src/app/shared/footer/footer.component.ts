import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbAccordion, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { RequestAccessComponent } from '../request-access/request-access.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @ViewChild('footerAccordion', { static: true }) accordion: NgbAccordion;
  routeSubscription: Subscription;
  header1 = 'Ready for Mantle?';
  subheader1 = 'Reach out today to start building wth blockchains.';
  header2 = "Don't see your preferred network?";
  subheader2 = 'Get in touch with us and request the blockchain network you have in mind';
  isPrimaryContent = true;

  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const splitURL = this.router.url.split('?')[0];
      this.isPrimaryContent = splitURL !== '/developers/supported-networks';
    });
  }

  onClick(route: string) {
    this.accordion.collapseAll();
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
