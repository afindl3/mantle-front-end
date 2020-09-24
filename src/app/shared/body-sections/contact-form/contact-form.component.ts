import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactForm: ContactFormFields;
  @Input() isInModal = false;
  isDarkBackground = true;

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    this.isDarkBackground = this.contactForm.type !== 'contact';
  }

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'contactUs')
      .append('firstName', this.form.value.firstName)
      .append('lastName', this.form.value.lastName)
      .append('email', this.form.value.email)
      .append('company', this.form.value.company)
      .append('message', this.form.value.message);
    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
      (res) => {},
      (err) => {
        if (err instanceof ErrorEvent) {
          // Client side error
          alert('Sorry - Something went wrong when sending your message.');
          console.log(err.error.message);
          this.activeModal.close('error');
        } else {
          // Backend error
          if (err.status === 200) {
            alert('Your message has been sent to the Mantle team!');
            this.activeModal.close('success');
          } else {
            alert('Sorry - Something went wrong when sending your message.');
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
            this.activeModal.close('error');
          }
        }
      }
    );
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
  Contact = 'contact',
}
