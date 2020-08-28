import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm: ContactFormFields = {
    title: "We'd love to hear from you!",
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    type: ContactFormType.Contact,
  };

  constructor() {}

  ngOnInit(): void {}
}
