import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-request-access',
  templateUrl: './request-access.component.html',
  styleUrls: ['./request-access.component.scss'],
})
export class RequestAccessComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    company: new FormControl(''),
    title: new FormControl(''),
    role: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onSubmit() {
    const body = new HttpParams()
      .set('form-name', 'requestAccess')
      .append('firstName', this.form.value.firstName)
      .append('lastName', this.form.value.lastName)
      .append('company', this.form.value.company)
      .append('title', this.form.value.title)
      .append('role', this.form.value.role)
      .append('email', this.form.value.email)
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
