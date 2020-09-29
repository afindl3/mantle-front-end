import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContentfulService } from './services/contentful/contentful.service';
import { RequestAccessComponent } from './shared/modals/request-access/request-access.component';
import { ContactModalComponent } from './shared/modals/contact-modal/contact-modal.component';
import { ContactFormFields, ContactFormType } from './shared/body-sections/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mantle-front-end';
  showMobileMenu = false;
  showContactPage = false;
  contactForm: ContactFormFields = {
    title: "We'd love to hear from you!",
    subtitle: 'Please fill out the form below and we will get back to you as soon as we can.',
    type: ContactFormType.ContactUs,
  };
  skipConstructionCheck = false;

  constructor(public contentfulService: ContentfulService, private route: ActivatedRoute, private modalService: NgbModal) {
    this.route.queryParams.subscribe((params) => {
      if (params.skipConstructionCheck === 'true') {
        this.skipConstructionCheck = true;
      }
    });
  }

  ngOnInit() {
    this.contentfulService.fetchEnvironmentVariables();
  }

  onActivate() {
    // Scroll to top of page on every route change
    window.scroll(0, 0);
  }

  // TODO - Below can be be deleted after construction page is turned off
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
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

  openContactModal() {
    const modalRef = this.modalService.open(ContactModalComponent);
    modalRef.componentInstance.contactForm = this.contactForm;
    modalRef.componentInstance.isInModal = true;
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
