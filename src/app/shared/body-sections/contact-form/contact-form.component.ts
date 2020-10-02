import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactForm: ContactFormFields;
  isDarkBackground = true;

  accountForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  });
  partnerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    job: new FormControl(''),
    company: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    partnership: new FormControl(''),
  });
  newsletterForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  contactUsForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.isDarkBackground = this.contactForm.type !== ContactFormType.ContactUs;
  }

  onSubmit() {
    const body = this.getBody();
    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
      (res) => {},
      (err) => {
        if (err instanceof ErrorEvent) {
          // Client side error
          alert('Sorry - Something went wrong when sending your message.');
          console.log(err.error.message);
        } else {
          // Backend error
          if (err.status === 200) {
            alert('Your message has been sent to the Mantle team!');
          } else {
            alert('Sorry - Something went wrong when sending your message.');
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          }
        }
      }
    );
  }

  private getBody(): any {
    let body;
    switch (this.contactForm.type) {
      case ContactFormType.Account:
        body = new HttpParams()
          .set('form-name', 'account')
          .append('firstName', this.accountForm.value.firstName)
          .append('lastName', this.accountForm.value.lastName)
          .append('email', this.accountForm.value.email)
          .append('company', this.accountForm.value.company)
          .append('message', this.accountForm.value.message);
        break;
      case ContactFormType.Partner:
        body = new HttpParams()
          .set('form-name', 'partner')
          .append('firstName', this.partnerForm.value.firstName)
          .append('lastName', this.partnerForm.value.lastName)
          .append('email', this.partnerForm.value.email)
          .append('job', this.partnerForm.value.job)
          .append('company', this.partnerForm.value.company)
          .append('phone', this.partnerForm.value.phone)
          .append('country', this.partnerForm.value.country)
          .append('partnership', this.partnerForm.value.partnership);
        break;
      case ContactFormType.Newsletter:
        body = new HttpParams()
          .set('form-name', 'newsletter')
          .append('firstName', this.newsletterForm.value.firstName)
          .append('lastName', this.newsletterForm.value.lastName)
          .append('email', this.newsletterForm.value.email);
        break;
      case ContactFormType.ContactUs:
        body = new HttpParams()
          .set('form-name', 'contactUs')
          .append('firstName', this.accountForm.value.firstName)
          .append('lastName', this.accountForm.value.lastName)
          .append('email', this.accountForm.value.email)
          .append('company', this.accountForm.value.company)
          .append('message', this.accountForm.value.message);
        break;
    }
    return body;
  }
}

export type ContactFormFields = {
  title: string;
  subtitle: string;
  type: ContactFormType;
};

export enum ContactFormType {
  Account = 'account',
  Partner = 'partner',
  Newsletter = 'newsletter',
  ContactUs = 'contactUs',
}
