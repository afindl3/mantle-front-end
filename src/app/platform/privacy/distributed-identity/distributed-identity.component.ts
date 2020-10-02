import { Component, OnInit } from '@angular/core';
import { StaggeredIconFields } from '../../../shared/body-sections/staggered-icons/staggered-icons.component';
import { SingleColumnFields } from '../../../shared/body-sections/single-column/single-column.component';

@Component({
  selector: 'app-distributed-identity',
  templateUrl: './distributed-identity.component.html',
  styleUrls: ['./distributed-identity.component.scss'],
})
export class DistributedIdentityComponent implements OnInit {
  distributedIdentitySingleColumnData: SingleColumnFields = {
    heading: 'Distributed identity with Mantle',
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
  distributedIdentityStaggeredIconsData: StaggeredIconFields = {
    heading: 'Why distributed identity with us?',
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
