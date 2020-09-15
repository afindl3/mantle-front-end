import { Component, OnInit } from '@angular/core';
import { StaggeredIconFields } from '../../../shared/body-sections/staggered-icons/staggered-icons.component';

@Component({
  selector: 'app-cross-cloud-storage',
  templateUrl: './cross-cloud-storage.component.html',
  styleUrls: ['./cross-cloud-storage.component.scss'],
})
export class CrossCloudStorageComponent implements OnInit {
  crossCloudStorage: StaggeredIconFields = {
    heading: 'Why use Mantles cross cloud storage?',
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
