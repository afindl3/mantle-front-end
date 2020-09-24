import { Component, OnInit } from '@angular/core';
import { ContactFormFields, ContactFormType } from '../../shared/body-sections/contact-form/contact-form.component';
import { SingleColumnFields } from '../../shared/body-sections/single-column/single-column.component';

@Component({
  selector: 'app-developer-program',
  templateUrl: './developer-program.component.html',
  styleUrls: ['./developer-program.component.scss'],
})
export class DeveloperProgramComponent implements OnInit {
  developerProgramSingleColumnData: SingleColumnFields = {
    heading: 'A world of possibilities with Mantle',
    items: [
      {
        title: 'Describe possibility',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Describe possibility',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        title: 'Describe possibility',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  };
  contactForm: ContactFormFields = {
    title: 'Get a $250 Mantle account now.',
    subtitle:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: ContactFormType.Account,
  };

  constructor() {}

  ngOnInit(): void {}
}
