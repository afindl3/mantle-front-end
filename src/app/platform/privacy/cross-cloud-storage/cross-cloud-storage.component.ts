import { Component, OnInit } from '@angular/core';
import { StaggeredIconFields } from '../../../shared/body-sections/staggered-icons/staggered-icons.component';

@Component({
  selector: 'app-cross-cloud-storage',
  templateUrl: './cross-cloud-storage.component.html',
  styleUrls: ['./cross-cloud-storage.component.scss'],
})
export class CrossCloudStorageComponent implements OnInit {
  crossCloudStorage: StaggeredIconFields = {
    heading: "Why use the Mantle's cross cloud storage?",
    subheading: "Mantle's cybersecurity makes every workplace a secure location.",
    items: [
      {
        title: '2.',
        description:
          'Mantle makes enterprises resilient to cybersecurity and data risks by protecting our customers from ransomware attacks, physical hardware lockouts and permanent data loss.',
        image: 'assets/icons/network.png',
      },
      {
        title: '1.',
        description:
          'Mantle utilizes novel data fragmentation and multi-cloud hosting systems to offer advanced data privacy as a service.',
        image: 'assets/icons/network.png',
      },
      {
        title: '4.',
        description:
          'Possibly a sales point would be to ensure that all WFH situations are completely secure for employees not working from a secure location.',
        image: 'assets/icons/network.png',
      },
      {
        title: '3.',
        description:
          'Mantle ensures multi-cloud file retrieval, reducing your dependence on physical backups and ensuring your data is safe.',
        image: 'assets/icons/network.png',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
