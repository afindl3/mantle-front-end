import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-supported-networks',
  templateUrl: './supported-networks.component.html',
  styleUrls: ['./supported-networks.component.scss'],
})
export class SupportedNetworksComponent implements OnInit {
  contactForm: ContactFormFields = {
    title: 'Subscribe to newsletter',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    type: ContactFormType.Newsletter,
  };

  constructor() {}

  ngOnInit(): void {}
}
