import { Component, OnInit } from '@angular/core';
import { StaggeredColumnFields } from '../../../shared/staggered-columns/staggered-columns.component';
import { StaggeredIconFields } from '../../../shared/staggered-icons/staggered-icons.component';

@Component({
  selector: 'app-audit-portal',
  templateUrl: './audit-portal.component.html',
  styleUrls: ['./audit-portal.component.scss'],
})
export class AuditPortalComponent implements OnInit {
  auditPortalColumns: StaggeredColumnFields = {
    heading: 'Key features',
    subheading:
      'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    items: [
      {
        title: 'INSERT THE FEATURE HERE',
        description: 'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution.',
      },
      {
        title: 'INSERT THE FEATURE HERE',
        description: 'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution.',
      },
      {
        title: 'INSERT THE FEATURE HERE',
        description: 'Built on Hyperledger Besu, PegaSys Plus delivers additional features of your blockchain solution.',
      },
    ],
  };
  auditPortalIcons: StaggeredIconFields = {
    heading: 'A world of opportunities with blockchain',
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
