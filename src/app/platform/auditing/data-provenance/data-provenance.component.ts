import { Component, OnInit } from '@angular/core';
import { StaggeredIconFields } from '../../../shared/body-sections/staggered-icons/staggered-icons.component';

@Component({
  selector: 'app-data-provenance',
  templateUrl: './data-provenance.component.html',
  styleUrls: ['./data-provenance.component.scss'],
})
export class DataProvenanceComponent implements OnInit {
  dataProvenanceListItems = [
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
  dataProvenanceIcons: StaggeredIconFields = {
    heading: 'The value of blockchain powered data provenance',
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

  constructor() {}

  ngOnInit(): void {}
}
