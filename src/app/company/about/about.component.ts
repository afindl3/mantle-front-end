import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  selectedMilestone = 0;
  // TODO: Pull from conntentful
  milestones = [
    {
      year: '2017',
      title: 'Milestone 1',
      description:
        'Milestone 1 Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    },
    {
      year: '2018',
      title: 'Milestone 2',
      description:
        'Milestone 2 Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    },
    {
      year: '2019',
      title: 'Milestone 3',
      description:
        'Milestone 3 Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    },
    {
      year: '2020',
      title: 'Milestone 4',
      description:
        'Milestone 4 Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do aiusmod tempr incididunt ut labore et ddolore magna aliqua.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    this.selectedMilestone = index;
  }
}
