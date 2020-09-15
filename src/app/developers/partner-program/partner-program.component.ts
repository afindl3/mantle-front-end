import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-partner-program',
  templateUrl: './partner-program.component.html',
  styleUrls: ['./partner-program.component.scss'],
})
export class PartnerProgramComponent implements OnInit {
  partnerProgramListItems = [
    'Cross Cloud Storage',
    'Distributed Identity',
    'Agrreement Validation',
    'Data Provenance',
    'Audit Portal',
    'Cross Cloud Storage',
    'Distributed Identity',
    'Agrreement Validation',
    'Data Provenance',
    'Audit Portal',
  ];
  contactForm: ContactFormFields = {
    title: 'Become a partner',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: ContactFormType.Partner,
  };

  constructor() {}

  ngOnInit(): void {}
}
