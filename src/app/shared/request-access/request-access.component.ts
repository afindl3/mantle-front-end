import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss'],
})
export class RequestAccessComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    title: new FormControl(''),
    // role: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('request accesss componnent init');
  }

  onSubmit() {
    console.log(this.contactForm.value);
    const body = new HttpParams()
      .set('form-name', 'contact')
      .append('firstName', this.contactForm.value.firstName)
      .append('lastName', this.contactForm.value.lastName)
      .append('company', this.contactForm.value.company)
      .append('title', this.contactForm.value.title)
      // .append('role', this.contactForm.value.role)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message);
    this.http.post('/', body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).subscribe(
      (res) => {},
      (err) => {
        if (err instanceof ErrorEvent) {
          //client side error
          alert('Something went wrong when sending your message.');
          console.log(err.error.message);
        } else {
          //backend error. If status is 200, then the message successfully sent
          if (err.status === 200) {
            alert('Your message has been sent!');
          } else {
            alert('Something went wrong when sending your message.');
            console.log('Error status:');
            console.log(err.status);
            console.log('Error body:');
            console.log(err.error);
          }
        }
      }
    );
  }
}
