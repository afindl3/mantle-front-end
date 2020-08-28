import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/contact-form/contact-form.component';

@Component({
  selector: 'app-partner-program',
  templateUrl: './partner-program.component.html',
  styleUrls: ['./partner-program.component.scss'],
})
export class PartnerProgramComponent implements OnInit {
  contactForm: ContactFormFields = {
    title: 'Become a partner',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    type: ContactFormType.Partner,
  };

  constructor() {}

  ngOnInit(): void {}
}
