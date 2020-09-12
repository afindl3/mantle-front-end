import { Component, OnInit } from '@angular/core';
import { StaggeredColumnFields } from '../../../shared/staggered-columns/staggered-columns.component';
import { StaggeredIconFields } from '../../../shared/staggered-icons/staggered-icons.component';

@Component({
  selector: 'app-agreement-validation',
  templateUrl: './agreement-validation.component.html',
  styleUrls: ['./agreement-validation.component.scss'],
})
export class AgreementValidationComponent implements OnInit {
  auditValidationListItems = [
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
  agreementValidationIcons: StaggeredIconFields = {
    heading: "Why use Mantle's cross cloud storage?",
    subheading:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        title: 'Insert reason',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
        image: 'assets/icons/network.png',
      },
      {
        title: 'Insert reason',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
        image: 'assets/icons/network.png',
      },
      {
        title: 'Insert reason',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
        image: 'assets/icons/network.png',
      },
      {
        title: 'Insert reason',
        description:
          'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
        image: 'assets/icons/network.png',
      },
    ],
  };
  agreementValidationColumns: StaggeredColumnFields = {
    heading: 'Why agreement validation matters',
    subheading:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        title: '100%',
        description:
          'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
      },
      {
        title: '100%',
        description:
          'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
      },
      {
        title: '100%',
        description:
          'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution. Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
